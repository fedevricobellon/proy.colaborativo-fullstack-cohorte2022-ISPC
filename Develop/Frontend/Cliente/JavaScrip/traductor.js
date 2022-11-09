var botonTraducirIn=document.querySelector("#btn-traducirIn");
var botonTraducirEs=document.querySelector("#btn-traducirEs");
var bloqueUnoEs=document.querySelector("#bloqueUnoEs");
var bloqueUnoEn=document.querySelector("#bloqueUnoEn");
var bloqueDosEs=document.querySelector("#bloqueDosEs");
var bloqueDosEn=document.querySelector("#bloqueDosEn");
var bloqueTresEs=document.querySelector("#bloqueTresEs");
var bloqueTresEn=document.querySelector("#bloqueTresEn");
var tituloQuieneSomos=document.querySelector(".quieneSomos-titulo");

bloqueUnoEn.style.display="none";
bloqueDosEn.style.display="none";
bloqueTresEn.style.display="none";
botonTraducirEs.style.display="none";


botonTraducirIn.addEventListener("click",mostrarEnIngles);

function mostrarEnIngles(){  
    titulo="About Us?";
    tituloQuieneSomos.textContent=titulo;
    tituloQuieneSomos.style.fontSize="45px";
    tituloQuieneSomos.style.fontWeight="bold";
    tituloQuieneSomos.style.textShadow="1px 2px black";
    tituloQuieneSomos.style.textAlign="center";
    botonTraducirIn.style.display="none";
    botonTraducirEs.style.display="block";
    bloqueUnoEs.style.display="none";
    bloqueUnoEn.style.display="block";
    bloqueDosEs.style.display="none";
    bloqueDosEn.style.display="block";
    bloqueTresEs.style.display="none";
    bloqueTresEn.style.display="block";
  
}

botonTraducirEs.addEventListener("click",mostrarEnEspaniol);

function mostrarEnEspaniol(){
    titulo="Quiénes Somos?";
    tituloQuieneSomos.textContent=titulo;
    botonTraducirIn.style.display="block";
    botonTraducirEs.style.display="none";
    bloqueUnoEs.style.display="block";
    bloqueUnoEn.style.display="none";
    bloqueDosEs.style.display="block";
    bloqueDosEn.style.display="none";
    bloqueTresEs.style.display="block";
    bloqueTresEn.style.display="none";
  
}
