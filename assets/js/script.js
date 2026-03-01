// Menu mobile simple
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

//Masquer les menu d'après un click sur des liens
links.addEventListener('click',function(){
    links.classList.toggle('open');
})


//MODE SOMBRE ET CLAIRE

//Declaration de la variable
const btn_switch=document.getElementById('btn-switch');
const body=document.body;

//Fontion pour le theme sombre
function sombre(){
  document.getElementById('icon-mode').src="assets/images/icon/sun-fill.svg";
  document.getElementById('icon-menu').src="assets/images/icon/list.svg";
}

//Fontion pour le theme clair
function clair(){
  document.getElementById('icon-mode').src="assets/images/icon/moon-fill.svg";
  document.getElementById('icon-menu').src="assets/images/icon/list clair.svg";
}


//Switch
btn_switch.addEventListener("click",()=>{
    body.classList.toggle("mode-clair");

//Enregistrer le theme acuel
//Si theme actuel est le theme sombre
let classe=body.classList.contains("mode-clair");
if(classe){
    localStorage.setItem("theme","clair");
    clair();
}
//Si theme actuel est le theme claire
else{
    localStorage.setItem("theme","sombre");
    sombre();
}

});

//Recuperation de theme enregitré dans localStorage
const save_theme=localStorage.getItem('theme');
if(save_theme==="clair"){//clair
    body.classList.add("mode-clair");
    clair();
}
else{//Sombre
    sombre();
}


//RECUPERATION DE LA HAUTEUR DE HEADER
const header=document.querySelector('.header');

function updateHeaderHeight(){
    const height=(header.offsetHeight)+5;
    document.documentElement.style.setProperty('--header-height',height+'px');
}

updateHeaderHeight();
window.addEventListener('resize',updateHeaderHeight);





  