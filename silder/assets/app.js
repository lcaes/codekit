"use strict"

const btnPrev = document.querySelector(".slider__btn--prev");
const btnNext = document.querySelector(".slider__btn--next");

btnPrev.addEventListener("click",prevSlide);
btnNext.addEventListener("click",nextSlide);

function nextSlide(){
    const elShow = document.querySelector(".slider__el--show");
    const elNext = elShow.nextElementSibling;

    elShow.classList.remove("slider__el--show");
    if(elNext){
        elNext.classList.add("slider__el--show");
    } else{
        const elFirst = elShow.parentElement.firstElementChild;
        elFirst.classList.add("slider__el--show");
    }
}
function prevSlide(){
    const elShow = document.querySelector(".slider__el--show");
    const elPrev = elShow.previousElementSibling;

    elShow.classList.remove("slider__el--show");
    if(elPrev){
        elPrev.classList.add("slider__el--show");
    } else{
        const elLast = elShow.parentElement.lastElementChild;
        elLast.classList.add("slider__el--show");
    }
}

document.addEventListener("keydown", function(event){
    if(event.code == "ArrowLeft"){
        prevSlide();
    }
    else if( event.code == "ArrowRight"){
        nextSlide();
    }
});