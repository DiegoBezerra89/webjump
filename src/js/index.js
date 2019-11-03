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

        //prepare a UI para os resultados


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

elements.clickCamisetas.addEventListener('click', e => {
    let id = 1;
    e.preventDefault();
    controlClick(id);
})

elements.clickCalcas.addEventListener('click', e => {
    let id = 2;
    e.preventDefault();
    controlClick(id);
})

elements.clickTenis.addEventListener('click', e => {
    let id = 3;
    e.preventDefault();
    controlClick(id);
})








