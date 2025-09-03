
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

