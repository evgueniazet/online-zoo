// window.addEventListener('load', () => {

// })

var burger = document.querySelector(".header-menu");
console.log('burger', burger);
var navBurger = document.querySelector(".nav-burger");
console.log('navBurger', navBurger);

burger.addEventListener('click', handClick);

function handClick(evt) {
    // evt.preventDefault();
    console.log('navBurger.style', navBurger.style);

    if (navBurger.style.display === '') {
        navBurger.style.display = "block";
    } else {
        navBurger.style.display = '';
    }
}