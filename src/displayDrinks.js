import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';
const displayDrinks = ({ drinks }) => {
    const section = get('.section-center');
    const title = get('.title');
    if (!drinks) {
        //hide Loading
        hideLoading();
        title.textContent = 'Sorry, No Drinks Matched Your Search';
        section.innerHTML = null;
        return;
    }
    const newDrinks = drinks.map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
    })
}