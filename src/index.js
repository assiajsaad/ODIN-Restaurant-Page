import { homeComponent } from "./home.js";
import { aboutComponent } from "./about.js";
import { menuComponent } from "./menu.js";
import "./style.css";


 const contentDiv = document.querySelector('#content');
 contentDiv.appendChild(homeComponent());


 const buttons = document.querySelectorAll('button');

 buttons.forEach(button => {
    button.addEventListener('click',(event)=>{
        switchTab(event);
    })
 })


 function switchTab(event){
    switch (event.target.id) {
        case 'home':
            contentDiv.removeChild(contentDiv.firstChild);
            contentDiv.appendChild(homeComponent());
            break;
        case 'menu':
            contentDiv.removeChild(contentDiv.firstChild);
            contentDiv.appendChild(menuComponent());
            break;
        case 'about':
            contentDiv.removeChild(contentDiv.firstChild);
            contentDiv.appendChild(aboutComponent());
            break;
    
        default:
            break;
    }
 }
