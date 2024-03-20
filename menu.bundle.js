"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["menu"],{

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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDa0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0Q0FBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWN0SW5mbyA9IHtcclxuICBudW1iZXI6IFwiKzEgMTIzIDQ1NiA3ODlcIixcclxuICBhZGRyZXNzOiBcIlJhbmRvbSBhZHJlc3MgMTIzXCIsXHJcbiAgZW1haWw6IFwiZW1haWxAdXMuY29tXCIsXHJcbn07XHJcblxyXG5jb25zdCBtZW51SXRlbXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiR3JlZWsgU2FsYWRcIixcclxuICAgIHByaWNlOiBcIiQxMFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiU29tZSByYW5kb20gaW5mb1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSGFtYnVyZ2VyXCIsXHJcbiAgICBwcmljZTogXCIkMTVcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgcmFuZG9tIGluZm9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlBpenphXCIsXHJcbiAgICBwcmljZTogXCIkMTIuOTlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgcmFuZG9tIGluZm9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNsdWIgU2FuZHdpY2hcIixcclxuICAgIHByaWNlOiBcIiQxMS41NFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiU29tZSByYW5kb20gaW5mb1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgeyBjb250YWN0SW5mbywgbWVudUl0ZW1zIH07XHJcbiIsImltcG9ydCB7IG1lbnVJdGVtcyB9IGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmZ1bmN0aW9uIG1lbnVDb21wb25lbnQgKCl7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGl0bGUnKTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgbWVudUl0ZW1zLmZvckVhY2goIChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcclxuICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xyXG4gICAgICAgIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XHJcbiAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xyXG4gICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xyXG4gICAgICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaXRlbS1jYXJkJyk7XHJcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChpdGVtRGl2KTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgbWVudUNvbXBvbmVudCxcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==