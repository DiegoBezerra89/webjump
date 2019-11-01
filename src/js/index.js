// Global app controller
import axios from 'axios';

async function getResults(id) {
    //pegar id do menu, da busca, dos filtros, etc
    try {
        const res = await axios(`http://localhost:8888/api/V1/categories/${id}`);
        const produtos = res.data.items;
        console.log(produtos);
    } catch (error) {
        alert (error);
    }
}


//id digitado, clicado, filtrado etc
getResults(2);




