// Global app controller
//o objeto Search está ok
import Search from './models/Search';

const state = {};

//search listener
const controlSearch = async () => {
    //pegar o id do input
    const id = 3; //por enquanto ainda não pegou, só para demonstrar

    if(id) {
        //novo objeto Search
        //adiciona ao state
        state.search = new Search(id);

        //prepare a UI para os resultados


        //busca por peças
        await state.search.getResults();

        //renderiza os resultados na tela
        console.log(state.search.result);
    }
}


//ao clicar no botao de busca, o json é acionado e traz os dados de itens do id em questão
document.getElementById('search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});



const search = new Search(1);
search.getResults();








