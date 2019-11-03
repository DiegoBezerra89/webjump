//Search models to control the search 

import axios from 'axios';

export default class Search {
    constructor(query) {
        this.id = query;
    }
    async getResults() {
        //pegar id do menu, da busca, dos filtros, etc
        try {
            const res = await axios(`http://localhost:8888/api/V1/categories/${this.id}`);
            this.result = res.data.items;
            //console.log(this.result);
        } catch (error) {
            alert ('Resultado de busca não encontrado!');
        }
    }
}



/*
Se o que estiver escrito na barra de busca for calça, camiseta, tenis, sapato, camisa, calçados, etc. 
Cria-se uma var com o conteudo digitado, faz-se a busca por id, e concatena o id no endereço da API.
*/

//fazer um switch do input de busca e transformar de acordo com o que foi digitado, no id escolhido.




//id digitado, clicado, filtrado etc
