import { menuItems } from "./data";

function menuComponent (){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const title = document.createElement('h1');
    title.textContent = 'Menu';
    title.classList.add('menu-title');
    menu.appendChild(title);
    menuItems.forEach( (item,index)=>{
        const itemDiv = document.createElement('div');
        const itemName = document.createElement('div');
        const itemPrice = document.createElement('div');
        const itemDesc = document.createElement('div');

        itemName.textContent = item.title;
        itemPrice.textContent = item.price;
        itemDesc.textContent = item.description;

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice);
        itemDiv.appendChild(itemDesc);
        itemDiv.classList.add('item-card');
        menu.appendChild(itemDiv);
    })

    return menu;
}


export {
    menuComponent,
}