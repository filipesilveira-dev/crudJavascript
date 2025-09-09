
const userInfo = document.getElementById("userList");
const userInfoToDelete = document.getElementById("userListToDelete");

//função criada para esconder a landing page e "ir" para a seção de cadastro
function toCreateSection(){
    const showCreateSection = document.getElementById("createSection");
    const hideLandingSection = document.getElementById("landingSection");
    hideLandingSection.style.display = "none";
    showCreateSection.style.display = "flex";
    
}

//função criada para esconder a landing page e "ir" para a seção de lista
function toListSection(){
    const showListSection = document.getElementById("ListSection");
    const hideLandingSection = document.getElementById("landingSection");
    hideLandingSection.style.display = "none";
    showListSection.style.display = "flex";
   
}

//função criada para esconder a landing page e "ir" para a seção de deletar
function toDeleteSection(){
    const showDeleteSection = document.getElementById("deleteSection");
    const hideLandingSection = document.getElementById("landingSection");
    hideLandingSection.style.display = "none";
    showDeleteSection.style.display = "flex";
    
}

// função criada para retornar à landing page
function returnLandingPage(){
    const showLandingPage = document.getElementById("landingSection");
    const hideCreateSection = document.getElementById("createSection");
    const hideDeleteSection = document.getElementById("deleteSection");
    const hideListSection = document.getElementById("ListSection");


    const returnFromCreateBtn = document.getElementById("returnBtnFromCreate");
    const toLandingPageBtn = document.getElementById("returnBtnFromCreate");

    
    hideCreateSection.style.display = "none";
    showLandingPage.style.display = "flex";
   

    const returnFromListBtn = document.getElementById("returnBtnFromList");
    
    hideListSection.style.display = "none";
    showLandingPage.style.display = "flex";
    

    const returnFromDeleteBtn = document.getElementById("returnBtnFromDelete");
    
    hideDeleteSection.style.display = "none";
    showLandingPage.style.display = "flex";
    
}

    //fetch para pegar (GET) as informações salvas na api do crudcrud
fetch("https://crudcrud.com/api/6d807f61ce084155825b1f256a47ba98/user")
    //caso a requisição dê certo, ou seja, a resposta venha, visa-se buscar o json dela
    .then((response) => response.json())
    //se der certo pegar o json da resposta, será retornada uma array com vários usuários e seus emails
    .then((user) => {

        //itera sobre cada usuário do array. Para cada elemento (usuário) de user será executada o que está na arrow function
        user.forEach(user => {

             //cria um novo elemento de lista (<li>) para cada usuário, com seu nome e seu email
            const userNameEmail = document.createElement("li");
            //define o conteúdo HTML do userNameEmail, nome e email
            userNameEmail.innerHTML = `Nome: ${user.Nome} || Email: ${user.Email}`;
            //adiciona o novo userNameEmail à lista de usuários ("userList") no HTML
            userInfo.appendChild(userNameEmail);
        });
    })
    .catch(error => console.error("Erro ao adicionar tarefa: ", error));


    // evento para criar usuário
    document.getElementById("addUser").addEventListener("click", ()=>{

    //seleciona o elemento HTML (id="userName" e "userEmail") de onde será recebido o valor ou informação que será acrescentada na lista de tarefas 
    const userName = document.getElementById("userName").value;
    const userEmail = document.getElementById("userEmail").value;

    
    //a URL será a mesma utilizada anteriormente no método GET, porém ao final será acrecentado um objeto e suas informações que serão acrescidas
    fetch("https://crudcrud.com/api/6d807f61ce084155825b1f256a47ba98/user", {

        method: "POST", //método de acrescentar
        headers: {
            //objeto informa que o tipo de conteúdo que será passado é do tipo JSON
            "Content-Type": "application/json"
        },
        //no body é o que será enviado, no caso um arquivo JSON. Dessa forma é utilizado o parâmetro estabelecido no postman (nome e email) que fica na primeira posição dos parâmetros passados e, no segundo parâmetro, será passada a variável "name" e "email" criada para receber o valor do que há no elemento HTML com id="userList" e id="userListToDelete". Como se trata de um objeto em javascript, é necessário transformá-lo em JSON por meio do JSON.stringify().
        body: JSON.stringify({ Nome: userName, Email: userEmail })

    })
        .then(response => response.json())
        .then((user) => {

            //cria dois novos elementos de lista (<li>) para cada sessão
            const userNameEmail = document.createElement("li");
            const userNameEmailToDelete = document.createElement("li");

            //define o conteúdo HTML do userEmail e userEmailToDelete, nome e email
            userNameEmail.innerHTML = `Nome: ${user.Nome} || Email: ${user.Email}`;
            userNameEmail.setAttribute("id", "nameEmail");
            userNameEmailToDelete.innerHTML = `${user.Nome} || Email: ${user.Email} <button data-id="${user._id}" onclick="remove('${user._id}')">X</button>`;
            //adiciona os novos userInfo à lista de usuários e usuários para deletar no HTML
            userInfo.appendChild(userNameEmail);
            userInfoToDelete.appendChild(userNameEmailToDelete);

            limparCampo()
        })
        
        .catch(error => console.error("Erro ao adicionar usuário: ", error));
    })

// função criada para deletar um usuário da API
function remove(userId) {
    fetch(`https://crudcrud.com/api/6d807f61ce084155825b1f256a47ba98/user/${userId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    })

        .then(response => {
            // Verifica se deu certo para depois chamar a função para remover da tela
            if (response.ok) {
                console.log(`Item com ID ${userId} foi deletado com sucesso!`);
                removerUsuarioDaTela(userId);
            } else {
                console.log('Erro ao deletar item:', response.status);
                alert('Erro ao deletar usuário');
            }
        })
        .catch(error => {
            console.error('Erro na requisição de delete:', error);
            alert('Erro ao conectar com o servidor');
        });
}

// função criada para remover o elemento HTML adicionado via javascript
function removerUsuarioDaTela(userId) {
    const button = document.querySelector(`button[data-id="${userId}"]`);
    const nameEmailId = document.getElementById("nameEmail");
    // se tiver um elemento com id='button' ou id='nameEmailId'
    if (button || nameEmailId) {
        // Remove o elemento pai (li) do botão encontrado
        button.parentElement.remove();
        nameEmailId.parentElement.remove();
        console.log(`Item com ID ${userId} removido da tela`);
        alert('Usuário deletado com sucesso!');
    } else {
        console.error(`Botão com ID ${userId} não encontrado na tela`);
    }
}

//função criada para limpar o campo de input do formulário
function limparCampo() {
    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail");
    userName.value = '';
    userEmail.value = '';
    userName.focus();
}