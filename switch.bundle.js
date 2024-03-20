"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["switch"],{

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutComponent: () => (/* binding */ aboutComponent)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


function aboutComponent() {
    const about = document.createElement('div');
    about.classList.add('about');

    const title= document.createElement('h1');
    title.textContent = 'Contact us';
    
    const phoneNumber = document.createElement('div');
    phoneNumber.textContent = _data__WEBPACK_IMPORTED_MODULE_0__.contactInfo.number;

    const address = document.createElement('div');
    address.textContent = _data__WEBPACK_IMPORTED_MODULE_0__.contactInfo.address;

    const email = document.createElement('div');
    email.textContent = _data__WEBPACK_IMPORTED_MODULE_0__.contactInfo.email;
    


    about.appendChild(title);
    about.appendChild(phoneNumber);
    about.appendChild(address);
    about.appendChild(email);

    return about;
}




/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactInfo: () => (/* binding */ contactInfo),
/* harmony export */   menuItems: () => (/* binding */ menuItems)
/* harmony export */ });
const contactInfo = {
  number: "+1 123 456 789",
  address: "Random adress 123",
  email: "email@us.com",
};

const menuItems = [
  {
    title: "Greek Salad",
    price: "$10",
    description: "Some random info",
  },
  {
    title: "Hamburger",
    price: "$15",
    description: "Some random info",
  },
  {
    title: "Pizza",
    price: "$12.99",
    description: "Some random info",
  },
  {
    title: "Club Sandwich",
    price: "$11.54",
    description: "Some random info",
  },
];




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeComponent: () => (/* binding */ homeComponent)
/* harmony export */ });
/* harmony import */ var _images_food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/food.jpg */ "./src/images/food.jpg");


function homeComponent() {
    const home = document.createElement('div');
    home.classList.add('home');

    const title = document.createElement("h1");
    title.textContent = "Welcome to our Resto";
  
    const foodImg = new Image();
    foodImg.src = _images_food_jpg__WEBPACK_IMPORTED_MODULE_0__;
    foodImg.classList.add("home-image");
  
    const info = document.createElement("p");
    info.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, minima repellendus maiores esse doloribus recusandae amet ut! Autem, nemo mollitia voluptatibus quos sequi ullam?";
  
    home.appendChild(title);
    home.appendChild(foodImg);
    home.appendChild(info);

    return home;
  }

  

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuComponent: () => (/* binding */ menuComponent)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


function menuComponent (){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const title = document.createElement('h1');
    title.textContent = 'Menu';
    title.classList.add('menu-title');
    menu.appendChild(title);
    _data__WEBPACK_IMPORTED_MODULE_0__.menuItems.forEach( (item,index)=>{
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




/***/ }),

/***/ "./src/switch-tab.js":
/*!***************************!*\
  !*** ./src/switch-tab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   switchTab: () => (/* binding */ switchTab)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");




function switchTab(event,contentDiv){
    switch (event.target.id) {
        case 'home':
            contentDiv.removeChild(contentDiv.firstChild);
            contentDiv.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homeComponent)());
            break;
        case 'menu':
            contentDiv.removeChild(contentDiv.firstChild);
            contentDiv.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuComponent)());
            break;
        case 'about':
            contentDiv.removeChild(contentDiv.firstChild);
            contentDiv.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_1__.aboutComponent)());
            break;
    
        default:
            break;
    }
 }


 

/***/ }),

/***/ "./src/images/food.jpg":
/*!*****************************!*\
  !*** ./src/images/food.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1641e559193791cf5c09.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/switch-tab.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOENBQVc7QUFDekM7QUFDQTtBQUNBLDBCQUEwQiw4Q0FBVztBQUNyQztBQUNBO0FBQ0Esd0JBQXdCLDhDQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNrQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCUTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRDQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QjBDO0FBQ0U7QUFDRjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHVEQUFhO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1REFBYTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMseURBQWM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3dpdGNoLXRhYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250YWN0SW5mbyB9IGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmZ1bmN0aW9uIGFib3V0Q29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XHJcblxyXG4gICAgY29uc3QgdGl0bGU9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzJztcclxuICAgIFxyXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gY29udGFjdEluZm8ubnVtYmVyO1xyXG5cclxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSBjb250YWN0SW5mby5hZGRyZXNzO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9IGNvbnRhY3RJbmZvLmVtYWlsO1xyXG4gICAgXHJcblxyXG5cclxuICAgIGFib3V0LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xyXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoZW1haWwpO1xyXG5cclxuICAgIHJldHVybiBhYm91dDtcclxufVxyXG5cclxuZXhwb3J0IHsgYWJvdXRDb21wb25lbnQgfTtcclxuIiwiY29uc3QgY29udGFjdEluZm8gPSB7XHJcbiAgbnVtYmVyOiBcIisxIDEyMyA0NTYgNzg5XCIsXHJcbiAgYWRkcmVzczogXCJSYW5kb20gYWRyZXNzIDEyM1wiLFxyXG4gIGVtYWlsOiBcImVtYWlsQHVzLmNvbVwiLFxyXG59O1xyXG5cclxuY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkdyZWVrIFNhbGFkXCIsXHJcbiAgICBwcmljZTogXCIkMTBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgcmFuZG9tIGluZm9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkhhbWJ1cmdlclwiLFxyXG4gICAgcHJpY2U6IFwiJDE1XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTb21lIHJhbmRvbSBpbmZvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQaXp6YVwiLFxyXG4gICAgcHJpY2U6IFwiJDEyLjk5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTb21lIHJhbmRvbSBpbmZvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJDbHViIFNhbmR3aWNoXCIsXHJcbiAgICBwcmljZTogXCIkMTEuNTRcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgcmFuZG9tIGluZm9cIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IHsgY29udGFjdEluZm8sIG1lbnVJdGVtcyB9O1xyXG4iLCJpbXBvcnQgZm9vZEltYWdlIGZyb20gXCIuL2ltYWdlcy9mb29kLmpwZ1wiO1xyXG5cclxuZnVuY3Rpb24gaG9tZUNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gb3VyIFJlc3RvXCI7XHJcbiAgXHJcbiAgICBjb25zdCBmb29kSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBmb29kSW1nLnNyYyA9IGZvb2RJbWFnZTtcclxuICAgIGZvb2RJbWcuY2xhc3NMaXN0LmFkZChcImhvbWUtaW1hZ2VcIik7XHJcbiAgXHJcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBpbmZvLnRleHRDb250ZW50ID1cclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTW9sZXN0aWFlLCBtaW5pbWEgcmVwZWxsZW5kdXMgbWFpb3JlcyBlc3NlIGRvbG9yaWJ1cyByZWN1c2FuZGFlIGFtZXQgdXQhIEF1dGVtLCBuZW1vIG1vbGxpdGlhIHZvbHVwdGF0aWJ1cyBxdW9zIHNlcXVpIHVsbGFtP1wiO1xyXG4gIFxyXG4gICAgaG9tZS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBob21lLmFwcGVuZENoaWxkKGZvb2RJbWcpO1xyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChpbmZvKTtcclxuXHJcbiAgICByZXR1cm4gaG9tZTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCB7XHJcbiAgICBob21lQ29tcG9uZW50XHJcbiAgfSIsImltcG9ydCB7IG1lbnVJdGVtcyB9IGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmZ1bmN0aW9uIG1lbnVDb21wb25lbnQgKCl7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGl0bGUnKTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgbWVudUl0ZW1zLmZvckVhY2goIChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcclxuICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xyXG4gICAgICAgIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XHJcbiAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xyXG4gICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xyXG4gICAgICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaXRlbS1jYXJkJyk7XHJcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChpdGVtRGl2KTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgbWVudUNvbXBvbmVudCxcclxufSIsImltcG9ydCB7IGhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcbmltcG9ydCB7IGFib3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vYWJvdXQuanNcIjtcclxuaW1wb3J0IHsgbWVudUNvbXBvbmVudCB9IGZyb20gXCIuL21lbnUuanNcIjtcclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFRhYihldmVudCxjb250ZW50RGl2KXtcclxuICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmlkKSB7XHJcbiAgICAgICAgY2FzZSAnaG9tZSc6XHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoY29udGVudERpdi5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChob21lQ29tcG9uZW50KCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtZW51JzpcclxuICAgICAgICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChjb250ZW50RGl2LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVDb21wb25lbnQoKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2Fib3V0JzpcclxuICAgICAgICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChjb250ZW50RGl2LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGFib3V0Q29tcG9uZW50KCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gfVxyXG5cclxuXHJcbiBleHBvcnQge1xyXG4gICAgc3dpdGNoVGFiLFxyXG4gfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==