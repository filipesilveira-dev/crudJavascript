
//função criada para esconder a landing page e "ir" para a seção de cadastro
function toCreateSection(){
    const toCreateSectionBtn = document.getElementById("createBtn");
    const showCreateSection = document.getElementById("createSection");
    toCreateSectionBtn.addEventListener("click", ()=>{

        const hideLandingSection = document.getElementById("landingSection");
        hideLandingSection.style.display = "none";
        showCreateSection.style.display = "flex";
    })
}

//função criada para esconder a landing page e "ir" para a seção de lista
function toListSection(){
    const toListSectionBtn = document.getElementById("listBtn");
    const showListSection = document.getElementById("ListSection");
    toListSectionBtn.addEventListener("click", ()=>{
        
        const hideLandingSection = document.getElementById("landingSection");
        hideLandingSection.style.display = "none";
        showListSection.style.display = "flex";
    })
}

//função criada para esconder a landing page e "ir" para a seção de deletar
function toDeleteSection(){
    const toDeleteSectionBtn = document.getElementById("deleteBtn");
    const showDeleteSection = document.getElementById("deleteSection");
    toDeleteSectionBtn.addEventListener("click", ()=>{
        
        const hideLandingSection = document.getElementById("landingSection");
        hideLandingSection.style.display = "none";
        showDeleteSection.style.display = "flex";
    })
}

// função criada para retornar à landing page. Feitar para servir nas três ou mais possibilidades de aparição
function returnLandingPage(){
    const showLandingPage = document.getElementById("landingSection");
    const hideCreateSection = document.getElementById("createSection");
    const hideDeleteSection = document.getElementById("deleteSection");
    const hideListSection = document.getElementById("ListSection");


    const returnFromCreateBtn = document.getElementById("returnBtnFromCreate");
    const toLandingPageBtn = document.getElementById("returnBtnFromCreate");

    returnFromCreateBtn.addEventListener("click", ()=>{
            hideCreateSection.style.display = "none";
            showLandingPage.style.display = "flex";
    })

    const returnFromListBtn = document.getElementById("returnBtnFromList");
    returnFromListBtn.addEventListener("click", ()=>{
            hideListSection.style.display = "none";
            showLandingPage.style.display = "flex";
    })

    const returnFromDeleteBtn = document.getElementById("returnBtnFromDelete");
    returnFromDeleteBtn.addEventListener("click", ()=>{
            hideDeleteSection.style.display = "none";
            showLandingPage.style.display = "flex";
    })
}

