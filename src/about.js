import { contactInfo } from "./data";

function aboutComponent() {
    const about = document.createElement('div');
    about.classList.add('about');

    const title= document.createElement('h1');
    title.textContent = 'Contact us';
    
    const phoneNumber = document.createElement('div');
    phoneNumber.textContent = contactInfo.number;

    const address = document.createElement('div');
    address.textContent = contactInfo.address;

    const email = document.createElement('div');
    email.textContent = contactInfo.email;
    


    about.appendChild(title);
    about.appendChild(phoneNumber);
    about.appendChild(address);
    about.appendChild(email);

    return about;
}

export { aboutComponent };
