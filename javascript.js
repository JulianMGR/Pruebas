//MENU HAMBURGUESA
const menu = document.querySelector('.menu');
const trigger = document.getElementById("menuHamburguesa");

function toggle() {
  
  if (footer.classList.contains("chachi")==true) {

  	parriba();
  }
    menu.classList.toggle('menu--open');

}

trigger.addEventListener('click', toggle);

//MENU DESPLEGABLE INFERIOR

var flechas = document.getElementById("cosa1");
var footer = document.getElementById("main");


flechas.addEventListener("click", parriba);


function parriba(){
	

	if (menu.classList.contains("menu--open")==true) {

  	toggle();
  }
  footer.classList.toggle("chachi");

	for (var i = 0; i <2; i++) {
		document.getElementsByClassName("flecha")[i].classList.toggle("oculto");
	}
}


//MODO NOCHE

var noche = document.getElementById("cosa6").addEventListener("click", noche);

var iconosNoche = document.getElementsByClassName("icono");
function noche(){

	
	document.body.classList.toggle("darkMode");

	for (var i = 0; i < iconosNoche.length; i++) {
		iconosNoche[i].classList.toggle("iconosNoche");
	}
}
