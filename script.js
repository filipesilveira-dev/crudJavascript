
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

// função criada para retornar à landing page. Feitar para servir nas três ou mais possibilidades de aparição
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
fetch("https://crudcrud.com/api/1bbc4aa9ae214d6d93d28c925d1db7a9/user")
    //caso a requisição dê certo, ou seja, a resposta venha, visa-se buscar o json dela
    .then((response) => response.json())
    //se der certo pegar o json da resposta, será retornada uma array com vários usuários e seus emails
    .then((user) => {

        //itera sobre cada usuário do array. Para cada elemento (usuário) de listaDeTarefas será executada o que está na arrow function
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



    document.getElementById("addUser").addEventListener("click", ()=>{

    //seleciona o elemento HTML (id="userName" e "userEmail") de onde será recebido o valor ou informação que será acrescentada na lista de tarefas 
    const userName = document.getElementById("userName").value;
    const userEmail = document.getElementById("userEmail").value;

    
    //a URL será a mesma utilizada anteriormente no método GET, porém ao final será acrecentado um objeto e suas informações que serão acrescidas
    fetch("https://crudcrud.com/api/1bbc4aa9ae214d6d93d28c925d1db7a9/user", {

        method: "POST", //método de acrescentar
        headers: {
            //objeto informa que o tipo de conteúdo que será passado é do tipo JSON
            "Content-Type": "application/json"
        },
        //no body é o que será enviado, no caso um arquivo JSON. Dessa forma é utilizado o parâmetro estabelecido no postman (descricao) que fica na primeira posição dos parâmetros passados e, no segundo parâmetro, será passada a variável "description" criada para receber o valor do que há no elemento HTML com id="tarefa". Como se trata de um objeto em javascript, é necessário transformá-lo em JSON por meio do JSON.stringify().
        body: JSON.stringify({ Nome: userName, Email: userEmail })

    })
        .then(response => response.json())
        .then((user) => {

            //cria um novo elemento de lista (<li>) para cada tarefa
            const userNameEmail = document.createElement("li");
            const userNameEmailToDelete = document.createElement("li");

            //define o conteúdo HTML do userInfo, nome e email
            userNameEmail.innerHTML = `Nome: ${user.Nome} || Email: ${user.Email}`;
            userNameEmail.setAttribute("id", "nameEmail");
            userNameEmailToDelete.innerHTML = `${user.Nome} || Email: ${user.Email} <button data-id="${user._id}" onclick="remove('${user._id}')">X</button>`;
            //adiciona o novo userInfo à lista de tarefas no HTML
            userInfo.appendChild(userNameEmail);
            userInfoToDelete.appendChild(userNameEmailToDelete);

            limparCampo()
        })
        
        .catch(error => console.error("Erro ao adicionar usuário: ", error));
    })

//deletar da api ok (falta remover item da lista)
function remove(userId) {
    fetch(`https://crudcrud.com/api/1bbc4aa9ae214d6d93d28c925d1db7a9/user/${userId}`, {
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

function removerUsuarioDaTela(userId) {
    const button = document.querySelector(`button[data-id="${userId}"]`);
    const nameEmailId = document.getElementById("nameEmail");
    // se tiver um elemento com id='button'
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

function limparCampo() {
    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail");
    userName.value = '';
    userEmail.value = '';
    userName.focus();
}