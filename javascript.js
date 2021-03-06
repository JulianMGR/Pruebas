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
//barra URL

/*! Normalized address bar hiding for iOS & Android (c) @scottjehl MIT License */
(function( win ){
	var doc = win.document;
	
	// If there's a hash, or addEventListener is undefined, stop here
	if(!win.navigator.standalone && !location.hash && win.addEventListener ){
		
		//scroll to 1
		win.scrollTo( 0, 1 );
		var scrollTop = 1,
			getScrollTop = function(){
				return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
			},
		
			//reset to 0 on bodyready, if needed
			bodycheck = setInterval(function(){
				if( doc.body ){
					clearInterval( bodycheck );
					scrollTop = getScrollTop();
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}	
			}, 15 );
		
		win.addEventListener( "load", function(){
			setTimeout(function(){
				//at load, if user hasn't scrolled more than 20 or so...
				if( getScrollTop() < 20 ){
					//reset to hide addr bar at onload
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}
			}, 0);
		}, false );
	}
})( this );
