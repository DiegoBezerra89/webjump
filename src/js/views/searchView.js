import { elements } from './base';


//trata o resultado e transforma em id para selecionar a peça correta
export const getInput = () => {
    let id = elements.searchInput.value;
    let idType;
    switch(id) {
        case 'camisa' :
        case 'camiseta' :
        case 'shirt' :
        case 't-shirt' :
            idType = 1;
        break;
        case 'calça' :
        case 'pants' : 
        case 'calca' :   
            idType = 2;
        break;
        case 'tênis' :
        case 'tenis' :
        case 'sapato' :
        case 'shoes' :
        case 'boot' :
        case 'boots' :
            idType = 3;
        break;
        default:
            idType = 'not';
    }
    return idType;
}

const renderItem = item => {
    let name = item.name;
    let image = './' + item.image;
    let price = item.price;
    price = price.toFixed(2); //coloca dois numeros após a vírgula
    price = price.replace('.',',');

    const markup = `
        <div class="card">
            <figure class="card__image">
                <img src="${image}" class="card__image--fig" alt="peça de roupa">
            </figure>
            <div class="card__text">
                <h4 class="card__text--name">${name}</h4>
                <p class="card__text--price u-margin-top big-title">R$ ${price}</p>
            </div>
            <button class="card__button">Comprar</button>
        </div>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = items => {
    items.forEach(renderItem);
}
