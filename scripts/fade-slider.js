(function () {

const slides = document.querySelectorAll('.fade-slider__item');
const activeClass = 'fade-slider__item--visible';
let index = 0;

setInterval(function () {
    slides[index].classList.remove(activeClass);
    index=((index+1)%3);
    slides[index].classList.add(activeClass);
}, 5000);

}());