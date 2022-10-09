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









const scaleItem = document.querySelectorAll('.scale-item');
const array = [5000, 2000, 1000, 500, 250, 100, 50, 25];
const donationInput = document.querySelector('.donation-input');
const number = 4;

donationInput.value = '100';
// console.log('scaleItem', scaleItem);

for (let i = 0; i < scaleItem.length; i++) {
    scaleItem[i].addEventListener('click', function () {
        itemClick(i);
    });
}

function itemClick(i) {
    // console.log('itemClick');

    for (let index = 0; index < scaleItem.length; index++) {
        scaleItem[index].classList.remove('scale-item--active');
    };
    scaleItem[i].classList.add('scale-item--active');
    // console.log('number', number);
    const number = array[i];
    // console.log('number', number);

    donationInput.value = number;
};


donationInput.addEventListener('input', numberChange);

function numberChange(event) {

    // console.log('event', event);
    const inputNumber = event.target.value;
    // console.log('inputNumber', inputNumber);
    // console.log(typeof (inputNumber));

    const numberLength = inputNumber.length;
    // console.log('numberLength', numberLength);

    if (numberLength > number) {
        const numberSlice = inputNumber.slice(0, number);
        // console.log('numberSlice', numberSlice);
        donationInput.value = numberSlice;
    };
    const numberSlice = inputNumber.slice(0, number);

    const numberIndex = array.findIndex(
        function (element) {
            return element == numberSlice;
        }
    );

    if(numberIndex >= 0 ) {                
        for (let index = 0; index < scaleItem.length; index++) {
            scaleItem[index].classList.remove('scale-item--active');
        };
        scaleItem[numberIndex].classList.add('scale-item--active');
    };
    console.log('numberIndex', numberIndex);
    console.log('scaleItem[numberIndex]', scaleItem[numberIndex]);

    

};




