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








const cards = document.querySelectorAll('.cards');
const circleCardLeft = document.querySelector('.circle-card-left');
const circleCardRight = document.querySelector('.circle-card-right');
const cardsContainer = document.querySelector('.cards-container');

for (let i = 0; i < cards.length; i++) {
    cards[i].style.width = cardsContainer.offsetWidth + 'px';
}

window.addEventListener('resize', resizeHandler);

function resizeHandler() {
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
    blockClick();
};

circleCardLeft.addEventListener('click', circleLeftClick);

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
    blockClick();
};

function removeBlockClick() {
    circleCardLeft.classList.remove('circle-card--unactive');
    circleCardRight.classList.remove('circle-card--unactive');
};

function blockClick() {
    circleCardLeft.classList.add('circle-card--unactive');
    circleCardRight.classList.add('circle-card--unactive');
    setTimeout(removeBlockClick, 1000);
};





const reviewCard = document.querySelectorAll('.review-card');
const popupBackground = document.querySelector('.popup-background');
const popupIcon = document.querySelector('.popup-icon');


let activePopUpCardIndex;

for (let i = 0; i < reviewCard.length; i++) {
    reviewCard[i].addEventListener('click', function () {
        reviewCardClick(i);
    });
}

function reviewCardClick(i) {
    popupBackground.classList.toggle('popup-background--active');
    reviewCard[i].classList.toggle('review-card--active');
    popupIcon.classList.add('popup-icon--active');
    activePopUpCardIndex = i;
};

popupIcon.addEventListener('click', popupCloseClick);

function popupCloseClick() {
    popupBackground.classList.remove('popup-background--active');
    reviewCard[activePopUpCardIndex].classList.remove('review-card--active');
};

popupBackground.addEventListener('click', backgroundClick);

function backgroundClick() {
    popupBackground.classList.remove('popup-background--active');
    reviewCard[activePopUpCardIndex].classList.remove('review-card--active');
    popupIcon.classList.remove('popup-icon--active');
};








const input = document.querySelector('.scroll');
const reviewCardsContainer = document.querySelector('.review-cards-container');
const reviewCards = document.querySelector('.review-cards');


input.addEventListener('input', inputClickNumber);

function inputClickNumber(event) {
const inputPlace = event.target.value;
const reviewWidth = 0.125 * inputPlace;
console.log('reviewWidth', reviewWidth);
const reviewCardsWidth = reviewCards.offsetWidth;
const reviewCardsContainerWidth = reviewCardsContainer.offsetWidth;
console.log('reviewCardsWidth', reviewCardsWidth);
const reviewCardMove = reviewWidth * (reviewCardsWidth - reviewCardsContainerWidth);
reviewCards.style.left = -reviewCardMove + 'px';
};



