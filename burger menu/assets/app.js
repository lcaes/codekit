"use strict";
 
const menuToggle = document.querySelector('.menu__toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__el a');

if(menuToggle){
   menuToggle.addEventListener('click', menuOpen);
}
function menuOpen(){
   menu.classList.toggle("menu--open");
}

if(menuLinks){
   for(let menuLink of menuLinks){
       menuLink.addEventListener("click", menuClose);
   }
}
function menuClose(){
   menu.classList.remove("menu--open");}
 
