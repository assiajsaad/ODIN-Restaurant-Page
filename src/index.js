import { homeComponent } from "./home.js";
import { switchTab } from "./switch-tab.js";
import "./style.css";


 const contentDiv = document.querySelector('#content');
 contentDiv.appendChild(homeComponent());


 const buttons = document.querySelectorAll('button');

 buttons.forEach(button => {
    button.addEventListener('click',(event)=>{
        switchTab(event,contentDiv);
    })
 })


