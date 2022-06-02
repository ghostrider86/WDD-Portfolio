import { loadHeaderFooter } from './utils.js';

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function getCartContents() {

  for (let i = 0; i < localStorage.length; i++) {
    let cartItem = getLocalStorage(i);
    let ul = document.querySelector('.product-list');
    //tag creation
    let item_li = document.createElement('li');
    let item_a = document.createElement('a');
    let item_a_img = document.createElement('img');
    let item_a2 = document.createElement('a');
    let item_aH2 = document.createElement('h2');
    let item_p_color  = document.createElement('p');
    let item_p_quantity = document.createElement('p');
    let item_p_price = document.createElement('p');
    // attributes
    item_li.setAttribute('class', 'cart-card divider');
    item_a.setAttribute('class', 'cart-card__image');
    item_a.setAttribute('href', '#');
    item_a_img.setAttribute('src', `${cartItem.Image}`);
    item_a_img.setAttribute('alt', `${cartItem.Name}`);
    item_a2.setAttribute('href', '#');
    item_aH2.setAttribute('class', 'card__name');
    item_p_color.setAttribute('class', 'cart-card__color');
    item_p_quantity.setAttribute('class', 'cart-card__quantity');
    item_p_price.setAttribute('class', 'cart-card__price');
    //text
    item_aH2.textContent = `${cartItem.Name}`;
    item_p_color.textContent = `${cartItem.Colors[0].ColorName}`;
    item_p_quantity.textContent = 'qty: 1';
    item_p_price.textContent = `${cartItem.FinalPrice}`;

    //appending the children

    item_li.appendChild(item_a);
    item_a.appendChild(item_a_img);
    item_li.appendChild(item_a2);
    item_li.appendChild(item_aH2);
    item_li.appendChild(item_p_color);
    item_li.appendChild(item_p_quantity);
    item_li.appendChild(item_p_price);

    ul.appendChild(item_li);
  }
}

loadHeaderFooter('#cart-header', '#cart-footer');
getCartContents();
