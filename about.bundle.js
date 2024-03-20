"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["about"],{

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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/about.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw4Q0FBVztBQUN6QztBQUNBO0FBQ0EsMEJBQTBCLDhDQUFXO0FBQ3JDO0FBQ0E7QUFDQSx3QkFBd0IsOENBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjs7Ozs7Ozs7Ozs7Ozs7OztBQzVCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ2tDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250YWN0SW5mbyB9IGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmZ1bmN0aW9uIGFib3V0Q29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XHJcblxyXG4gICAgY29uc3QgdGl0bGU9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzJztcclxuICAgIFxyXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gY29udGFjdEluZm8ubnVtYmVyO1xyXG5cclxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSBjb250YWN0SW5mby5hZGRyZXNzO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9IGNvbnRhY3RJbmZvLmVtYWlsO1xyXG4gICAgXHJcblxyXG5cclxuICAgIGFib3V0LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xyXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoZW1haWwpO1xyXG5cclxuICAgIHJldHVybiBhYm91dDtcclxufVxyXG5cclxuZXhwb3J0IHsgYWJvdXRDb21wb25lbnQgfTtcclxuIiwiY29uc3QgY29udGFjdEluZm8gPSB7XHJcbiAgbnVtYmVyOiBcIisxIDEyMyA0NTYgNzg5XCIsXHJcbiAgYWRkcmVzczogXCJSYW5kb20gYWRyZXNzIDEyM1wiLFxyXG4gIGVtYWlsOiBcImVtYWlsQHVzLmNvbVwiLFxyXG59O1xyXG5cclxuY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkdyZWVrIFNhbGFkXCIsXHJcbiAgICBwcmljZTogXCIkMTBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgcmFuZG9tIGluZm9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkhhbWJ1cmdlclwiLFxyXG4gICAgcHJpY2U6IFwiJDE1XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTb21lIHJhbmRvbSBpbmZvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQaXp6YVwiLFxyXG4gICAgcHJpY2U6IFwiJDEyLjk5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTb21lIHJhbmRvbSBpbmZvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJDbHViIFNhbmR3aWNoXCIsXHJcbiAgICBwcmljZTogXCIkMTEuNTRcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgcmFuZG9tIGluZm9cIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IHsgY29udGFjdEluZm8sIG1lbnVJdGVtcyB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=