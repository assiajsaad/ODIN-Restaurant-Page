import foodImage from "./images/food.jpg";

function homeComponent() {
    const home = document.createElement('div');
    home.classList.add('home');

    const title = document.createElement("h1");
    title.textContent = "Welcome to our Resto";
  
    const foodImg = new Image();
    foodImg.src = foodImage;
    foodImg.classList.add("home-image");
  
    const info = document.createElement("p");
    info.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, minima repellendus maiores esse doloribus recusandae amet ut! Autem, nemo mollitia voluptatibus quos sequi ullam?";
  
    home.appendChild(title);
    home.appendChild(foodImg);
    home.appendChild(info);

    return home;
  }

  export {
    homeComponent
  }