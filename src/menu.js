import { menuItems } from "./data";

function menuComponent (){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const title = document.createElement('h1');
    title.textContent = 'Menu';

    menu.appendChild(title);

    return menu;
}


export {
    menuComponent,
}