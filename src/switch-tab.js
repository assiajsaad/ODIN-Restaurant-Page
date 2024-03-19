import { homeComponent } from "./home.js";
import { aboutComponent } from "./about.js";
import { menuComponent } from "./menu.js";

function switchTab(event,contentDiv){
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


 export {
    switchTab,
 }