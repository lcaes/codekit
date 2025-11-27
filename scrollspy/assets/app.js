"use strict"

const spyOptions = { //options pour comment l'observer doit fonctionner
   root: null, //tous le viewport
   rootMargin: "0px",//prend pas en compte les margin
   threshold: 0.8 //éléments 80% visible
};

const observer = new IntersectionObserver(scrollSpy, spyOptions);// on crée l'intersection observer a chaque foit qu'on a les options on lance la fonction
function scrollSpy(entries, _observer){ //l'underscore pour dire qu'on ne va pas utiliser le parametre
   for(let entry of entries){      //pour chacun des entry, on vérifie si elle correspond aux options
      if(entry.isIntersecting) { //si "isIntersecting" ca veut dire qu'il correspond aux options au dessus
         // l’élément est 80% visible dans le viewport
        const sectionId = entry.target.getAttribute("id");//renvoie à la section 1 2 3 ou 4 (on les récupère)

        const active = document.querySelector(".menu__el--active");
        if(active){
            active.classList.remove("menu__el--active");//si on a déjà un lien actif on l'enlève
        }

        const navActive = document.querySelector('a[href="#'+ sectionId +'"]');//attention au ' ou " car si on commence avec ", c'est comme si on refermait apres le = (on laisse les "" pour le #)
        //on ajoute une classe active sur le li qui a l'id qui correspond
        navActive.parentElement.classList.add("menu__el--active");

      }  
   }
}

const sections = document.querySelectorAll(".section");
for(let section of sections){
   observer.observe(section); //on ajoute un observer sur chacun des éléments de la nodlist
}


//en francais 

//quand section 80% visible, on récupère son ID
//cette id permet de selectionner nos liens (car ils ont la même valeurs)
//Grace au liens je récupère le li à qui j'ajoute la classe active
//pas oublier d'enlever celui qui avait déjà la classe active
