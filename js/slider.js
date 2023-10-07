"use strict"

const btnForward = document.querySelectorAll('.forward');
const btnBack = document.querySelectorAll('.back');
const slider = document.querySelector('.slider');
const slideWidth = slider.querySelector('.slide').offsetWidth;

let countSlides = 0;

for(let i = 0; i < btnForward.length; i++) {
    btnForward[i].onclick = function () {
        countSlides += 1;
        slider.style.marginLeft = countSlides * -slideWidth + 'px';
    };
}

for(let i = 0; i < btnBack.length; i++) {
    btnBack[i].onclick = function () {
        countSlides -= 1;
        slider.style.marginLeft = countSlides * -slideWidth + 'px';
    };
}