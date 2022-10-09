const burger = document.querySelector(".header-menu");
const navBurger = document.querySelector(".nav-burger");
const headerLogo = document.querySelector(".header-logo");
const header = document.querySelector('header')
const shadow = document.querySelector('.shadow');

burger.addEventListener('click', handClick);

function handClick() {
    header.classList.toggle('header--active');
}

shadow.addEventListener('click', handClickShadow);
function handClickShadow(event) {

    if (event.target.className === 'shadow') {
        header.classList.toggle('header--active');
    }
}
// const circleCard = document.querySelector('.circle-card-right', '.circle-card-left');
// const card = document.querySelector('.card');
// circleCard.addEventListener('click',)


const cards = document.querySelectorAll('.cards');
const circleCardLeft = document.querySelector('.circle-card-left');
const circleCardRight = document.querySelector('.circle-card-right');
const cardsContainer = document.querySelector('.cards-container');
// console.log('circleCardLeft', circleCardLeft);
// console.log('circleCardRight', circleCardRight);
// console.log('cards', cards);

// console.log('cardsContainer', cardsContainer);

for (let i = 0; i < cards.length; i++) {    
    cards[i].style.width = cardsContainer.offsetWidth + 'px';
}

window.addEventListener('resize', resizeHandler);

function resizeHandler(){
    const cardsContainer = document.querySelector('.cards-container');
    for (let i = 0; i < cards.length; i++) {    
        cards[i].style.width = cardsContainer.offsetWidth + 'px';
    }
};



circleCardRight.addEventListener('click', circleRightClick);

function circleRightClick() {
    const cards = document.querySelectorAll('.cards');
    cards[1].classList.remove('cards--active');
    cards[1].classList.add('cards--prev');

    cards[2].classList.remove('cards--next');
    cards[2].classList.add('cards--active');

    const cardsPrev = cards[0];
    cards[0].remove();
    cardsPrev.classList.remove('cards--prev');
    cardsPrev.classList.add('cards--next');

    cardsContainer.append(cardsPrev);
};

circleCardLeft.addEventListener('click',circleLeftClick);

function circleLeftClick() {
    const cards = document.querySelectorAll('.cards');
    cards[1].classList.remove('cards--active');
    cards[1].classList.add('cards--next');

    cards[0].classList.remove('cards--prev');
    cards[0].classList.add('cards--active');

    const cardsNext = cards[2];
    cards[2].remove();
    cardsNext.classList.remove('cards--next');
    cardsNext.classList.add('cards--prev');

    cardsContainer.prepend(cardsNext);    
};



// cardsContainer.offsetWidth






