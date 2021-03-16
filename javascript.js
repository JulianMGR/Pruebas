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
	if (cajaComent.classList.contains("coment--open")){
			textoIntr.focus();
	}
}

//  crea lineas segun texto introducido en textarea
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

//tu escribe y envia que ya lo pongo yo

var btnEnviar = document.getElementById("enviar");
var textoIntr = document.getElementById("introducir");

btnEnviar.addEventListener("click", enviaTexto);

function enviaTexto(){
	if (textoIntr.value!= '') {
	cajaComent.innerHTML += '<div class="cajaComent"> \
	<div class="coment">' + textoIntr.value + '</div> \
	<div class="btnEliminar" name="eliminar"><i class="icono fas fa-times"></i></i></div></div>';

	//eliminar mensaje en textarea
	textoIntr.value= '';
	textoIntr.style.height = "auto";
	setTimeout(respuesta, 2000);
	actualizaLista();
	scrollAbajo();
	}
	textoIntr.focus();	
	
	
	
}

//actualiza el numero de comentarios en "elimina" para su posterior eliminación
function actualizaLista(){
	var elimina = document.getElementsByClassName("btnEliminar");
	for (var i = 0; i < elimina.length; i++) {
 	elimina[i].addEventListener("click", eliminar);
	}
}

//elimina el mensaje seleccionado onClick
function eliminar(){
	this.parentNode.remove();
	scrollAbajo();
}

//mantiene el scroll abajo aunque en pc no baja del todo
function scrollAbajo(){
	cajaComent.scrollTop = cajaComent.scrollHeight;
}

// añadir solo respuesta mediante click en limon

const limon = document.getElementById("cosa3");
var cajaComent = document.getElementById("comentarios");
var respuestas = ["En mi opinión, sí", "Es cierto","Es decididamente así", "Probablemente", "Buen pronóstico", "Todo apunta a que sí", "Sin duda","Sí", "Sí - definitivamente", "Debes confiar en ello", "Respuesta vaga, vuelve a intentarlo", "Pregunta en otro momento", "Será mejor que no te lo diga ahora", "No puedo predecirlo ahora", "Concéntrate y vuelve a preguntar", "No cuentes con ello", "Mi respuesta es no", "Mis fuentes me dicen que no", "Las perspectivas no son buenas", "Muy dudoso"];

limon.addEventListener("click", respuesta);
 function respuesta(){
 	var numRandom = Math.floor(Math.random() * respuestas.length);
 	cajaComent.innerHTML += '<div class="cajaComent respuesta"> \
	<div class="coment">' + respuestas[numRandom] + '</div> \
	<div class="btnEliminar" name="eliminar"><i class="icono fas fa-times"></i></div></div>';
	actualizaLista();
	scrollAbajo();
 }
