
//função criada para esconder a landing page e "ir" para a seção de cadastro
function toCreateSection(){
    const toCreateSectionBtn = document.getElementById("createBtn");
    const showCreateSection = document.getElementById("createSection");
    

        const hideLandingSection = document.getElementById("landingSection");
        hideLandingSection.style.display = "none";
        showCreateSection.style.display = "flex";
    
}

//função criada para esconder a landing page e "ir" para a seção de lista
function toListSection(){
    const toListSectionBtn = document.getElementById("listBtn");
    const showListSection = document.getElementById("ListSection");
    
        
        const hideLandingSection = document.getElementById("landingSection");
        hideLandingSection.style.display = "none";
        showListSection.style.display = "flex";
   
}

//função criada para esconder a landing page e "ir" para a seção de deletar
function toDeleteSection(){
    const toDeleteSectionBtn = document.getElementById("deleteBtn");
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

function createUser(){
     //seleciona o elemento HTML (id="userName" e "userEmail") de onde será recebido o valor ou informação que será acrescentada na lista de tarefas 
    const userName = document.getElementById("userName").value;
    const userEmail = document.getElementById("userEmail").value;

    //a URL será a mesma utilizada anteriormente no método GET, porém ao final será acrecentado um objeto e suas informações que serão acrescidas
    fetch("https://crudcrud.com/api/7b56a48d0dcc4226a1bafae91f098b3f/tarefas", {

        method: "POST", //método de acrescentar
        headers: {
            //objeto informa que o tipo de conteúdo que será passado é do tipo JSON
            "Content-Type": "application/json"
        },
        //no body é o que será enviado, no caso um arquivo JSON. Dessa forma é utilizado o parâmetro estabelecido no postman (descricao) que fica na primeira posição dos parâmetros passados e, no segundo parâmetro, será passada a variável "description" criada para receber o valor do que há no elemento HTML com id="tarefa". Como se trata de um objeto em javascript, é necessário transformá-lo em JSON por meio do JSON.stringify().
        body: JSON.stringify({ Nome: userName, Email: userEmail });

    })
        .then(response => response.json())
        .then((user) => {

            //cria um novo elemento de lista (<li>) para cada tarefa
            const userInfo = document.createElement("li");
            //define o conteúdo HTML do item, incluindo descrição e botão
            userInfo.innerHTML = `${user.userName} - ${user.userEmail};;
            //adiciona o novo item à lista de tarefas no HTML
            user.appendChild(userInfo);
        })
}

