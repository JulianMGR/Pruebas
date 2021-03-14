//MENU HAMBURGUESA
const menu = document.querySelector('.menu');
const burguer = document.getElementById("menuHamburguesa");

burguer.addEventListener('click', toggle);

function toggle() {
  
  if (footer.classList.contains("chachi")==true) {

  	parriba();
  }
    menu.classList.toggle('menu--open');
    
}



// Submenus

var lista=document.getElementsByClassName("lista");


lista[0].addEventListener("click", culo);
lista[1].addEventListener("click", culo);

function culo(){
	this.classList.toggle("despliega");	
}



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
//abrir caja de texto
const bocadillo = document.getElementById("cosa2");
const cajaComentar = document.getElementById("comentar");

bocadillo.addEventListener("click", abreCajaComent);

function abreCajaComent(){
	cajaComentar.classList.toggle("comentar--open");
	cajaComent.classList.toggle("coment--open");
	scrollAbajo();
}



// añadir comentario mediante click en limon

const limon = document.getElementById("cosa3");
var cajaComent = document.getElementById("comentarios");

limon.addEventListener("click", masComent);

function masComent(){
	//añade comentario
	cajaComent.innerHTML += '<div class="cajaComent"> \
	<div class="coment">Lorem ipsum, dolor, sit amet consectetur adipisicing elit.</div> \
	<div class="btnEliminar" name="eliminar"><i class="icono fas fa-ban"></i></div></div>'

	//eliminar mensaje	
	actualizaLista();
	scrollAbajo();
	
}

function actualizaLista(){
	var elimina = document.getElementsByClassName("btnEliminar");
	for (var i = 0; i < elimina.length; i++) {
 	elimina[i].addEventListener("click", eliminar);
	}
}

function eliminar(){
	this.parentNode.remove();
	scrollAbajo();
}

function scrollAbajo(){
	cajaComent.scrollTop = cajaComent.scrollHeight;

}



// textarea crea lineas segun texto introducido
const tx = document.getElementsByTagName('textarea');
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight));
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
  this.scrollTop = this.scrollHeight;

}
