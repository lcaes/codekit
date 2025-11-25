"use strict"

const BackToTop= document.querySelector(".BackToTop");

if(BackToTop){
window.addEventListener("scroll", showBackToTop);
}

function showBackToTop(){
    const currentScroll = window.scrollY; 
    console.log(currentScroll)
    if(currentScroll > 300){
        BackToTop.classList.add("BackToTop--show");
    } else{
        BackToTop.classList.remove("BackToTop--show");
    }
}

