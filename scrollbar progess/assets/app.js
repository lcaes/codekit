"use strict"

const progressBar = document.querySelector(".scrollbar__progress");

if(progressBar){
   window.addEventListener("scroll", updateScrollProgress);
}

function updateScrollProgress(event){
   const maxScroll = document.body.scrollHeight - window.innerHeight;
   const currentScroll = window.scrollY;
   const readPercentage = (currentScroll / maxScroll) * 100;
   progressBar.style.setProperty('--scrollbar-width', readPercentage + '%');

}
    


