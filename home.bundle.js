"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["home"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZDQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb29kSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2Zvb2QuanBnXCI7XHJcblxyXG5mdW5jdGlvbiBob21lQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBvdXIgUmVzdG9cIjtcclxuICBcclxuICAgIGNvbnN0IGZvb2RJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGZvb2RJbWcuc3JjID0gZm9vZEltYWdlO1xyXG4gICAgZm9vZEltZy5jbGFzc0xpc3QuYWRkKFwiaG9tZS1pbWFnZVwiKTtcclxuICBcclxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGluZm8udGV4dENvbnRlbnQgPVxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNb2xlc3RpYWUsIG1pbmltYSByZXBlbGxlbmR1cyBtYWlvcmVzIGVzc2UgZG9sb3JpYnVzIHJlY3VzYW5kYWUgYW1ldCB1dCEgQXV0ZW0sIG5lbW8gbW9sbGl0aWEgdm9sdXB0YXRpYnVzIHF1b3Mgc2VxdWkgdWxsYW0/XCI7XHJcbiAgXHJcbiAgICBob21lLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoZm9vZEltZyk7XHJcbiAgICBob21lLmFwcGVuZENoaWxkKGluZm8pO1xyXG5cclxuICAgIHJldHVybiBob21lO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IHtcclxuICAgIGhvbWVDb21wb25lbnRcclxuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9