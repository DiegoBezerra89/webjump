// Global app controller
//o objeto Search está ok
import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base'; 
const state = {};


//search listener
const controlSearch = async () => {
    const query = searchView.getInput(); 
    if(query) {
        //novo objeto Search
        //adiciona ao state
        state.search = new Search(query);

        //prepare a UI para os resultados
        searchView.clearInput();
        searchView.clearResults();


        //busca por peças na API
        await state.search.getResults();

        //renderiza os resultados na tela
        searchView.renderResults(state.search.result);
    }
}

//controla os clicks do menu
const controlClick = async (id) => {
    //pegar o id do input
    //const query = searchView.getClick(id); 
        //novo objeto Search
        //adiciona ao state
        state.search = new Search(id);

        //limpa a tela
        searchView.clearResults();

        //busca por peças na API
        await state.search.getResults();

        //renderiza os resultados na tela
        searchView.renderResults(state.search.result);
}

//ao clicar no botao de busca, o json é acionado e traz os dados de itens do id em questão
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

//Pagina inicial
elements.clickHome.addEventListener('click', e => {
    e.preventDefault();
    controlClick(3);
});


//Clicks no menu
//ao clicar nos links a busca é acionada
elements.clickCamisetas.addEventListener('click', e => {
    let id = 1;
    e.preventDefault();
    elements.pageName.innerHTML = 'Camisetas';//não é a melhor maneira de realizar isso, mas por enquanto está ok
    elements.typeName.innerHTML = 'Camisetas';
    controlClick(id);
})

elements.clickCamisetasMenu.addEventListener('click', e => {
    let id = 1;
    e.preventDefault();
    elements.pageName.innerHTML = 'Camisetas';
    elements.typeName.innerHTML = 'Camisetas';
    controlClick(id);
})

elements.clickCalcasMenu.addEventListener('click', e => {
    let id = 2;
    e.preventDefault();
    elements.pageName.innerHTML ='Calças';
    elements.typeName.innerHTML = 'Calças';
    controlClick(id);
})

elements.clickCalcas.addEventListener('click', e => {
    let id = 2;
    e.preventDefault();
    elements.pageName.innerHTML = 'Calças';
    elements.typeName.innerHTML = 'Calças';
    controlClick(id);
})

elements.clickTenisMenu.addEventListener('click', e => {
    let id = 3;
    e.preventDefault();
    elements.pageName.innerHTML = 'Tênis/Sapatos';
    elements.typeName.innerHTML = 'Tênis/Sapatos';
    controlClick(id);
})

elements.clickTenis.addEventListener('click', e => {
    let id = 3;
    e.preventDefault();
    elements.pageName.innerHTML= 'Tênis/Sapatos';
    elements.typeName.innerHTML = 'Tênis/Sapatos';
    controlClick(id);
})


elements.clickHome.addEventListener('click', e => {
    elements.pageName.innerHTML = 'Tênis/Sapatos';
    elements.typeName.innerHTML = 'Tênis/Sapatos';
    searchView.clearResults();
})


//Init Function
const initFunction = async (id) => {
    //pegar o id do input
    //const query = searchView.getClick(id); 
        //novo objeto Search
        //adiciona ao state
        state.search = new Search(id);

        //busca por peças na API
        await state.search.getResults();

        //renderiza os resultados na tela
        searchView.renderResults(state.search.result);
}

//ao carregar a página esta função é chamada
(function(){
    initFunction(3);
})();


//DOM ELEMENTS
elements.buttonBusca.addEventListener('click', e => {
    var menuBox = document.querySelector('.header__box--search');    
    if(menuBox.style.display == "block") {
        menuBox.style.display = "none";
    }
    else {
        menuBox.style.display = "block";
    }
})

elements.menu.addEventListener('click', e => {
    var menuBox = document.querySelector('.header__nav');    
    if(menuBox.style.display == "block") {
        menuBox.style.display = "none";
    }
    else {
        menuBox.style.display = "block";
    }
})




