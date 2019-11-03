import { elements } from './base';


//input de busca
export const getInput = () => {
    let id = elements.searchInput.value;
    let idType;
        switch(id) {
            case 'camisa' :
            case 'camisas' :
            case 'camiseta' :
            case 'camisetas' :
            case 'shirt' :
            case 'shirts' :
            case 't-shirt' :
            case 't-shirts' :
            case '1':
                elements.pageName.innerHTML = 'Camisetas';
                idType = 1;
            break;
            case 'calça' :
            case 'pants' : 
            case 'calca' :
            case 'calcas' :
            case 'calças' :
            case '2':   
                elements.pageName.innerHTML = 'Calças';
                idType = 2;
            break;
            case 'tênis' :
            case 'tenis' :
            case 'sapato' :
            case 'sapatos' :
            case 'shoes' :
            case 'boot' :
            case 'boots' :
            case '3':
                elements.pageName.innerHTML = 'Tênis/Sapatos';
                elements.typeName.innerHTML = 'Tênis/Sapatos';
                idType = 3;
            break;
            default:
                idType = 'not';
        }
        
    return idType;
}

//limpa a busca
export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
};


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
};

export const renderResults = items => {
    items.forEach(renderItem);
};
