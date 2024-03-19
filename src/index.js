import "./style.css";
import food from "./images/food.jpg";

function homeComponent() {
  const divContent = document.querySelector("#content");
  const title = document.createElement("h1");
  title.textContent = "Welcome to our Resto";

  const image = new Image();
  image.src = food;
  image.classList.add("home-image");

  const info = document.createElement("p");
  info.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, minima repellendus maiores esse doloribus recusandae amet ut! Autem, nemo mollitia voluptatibus quos sequi ullam?";

  divContent.appendChild(title);
  divContent.appendChild(image);
  divContent.appendChild(info);
}
homeComponent();
