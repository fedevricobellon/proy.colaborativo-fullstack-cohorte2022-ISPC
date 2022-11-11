var adultos=document.querySelector("#adultos");
var menores=document.querySelector("#menores");

function validarDatos(){
    adultos.addEventListener('input', validarAdultos);
    menores.addEventListener('input', validarMenores);   

validarAdultos();
validarMenores();
}

// -------------validar adultos----------------------
function validarAdultos(){
    if(adultos.value <1 | adultos.value >100){
        adultos.style.backgroundColor="#f07676"
        adultos.setCustomValidity('ingrese valores positivos del: 1 a 100 por favor');
}else{
    adultos.style.backgroundColor="#4fa5f5"
    adultos.setCustomValidity('')
 }
}

// -------------validar menores---------------------
function validarMenores(){
    if(menores.value <0 | menores.value >100){
        menores.style.backgroundColor="#f07676"
        menores.setCustomValidity('ingrese valores positivos del: 0 a 100 por favor');
}else{
    menores.style.backgroundColor="#4fa5f5"
    menores.setCustomValidity('')
 }boton
}


window.addEventListener('load', validarDatos)


function enviar(){
    var boton=document.querySelector('#button1')
    boton.addEventListener('click', enviarFormulario)
}

function enviarFormulario(){
   var formulario=document.querySelector('#formulario1')
   var valido=formulario.checkValidity()
   if(valido){
       formulario.submit()
       alert('formulario enviado')

} else{
       alert('El formulario no puede ser enviado')
   }
}

window.addEventListener('load',enviar)

// :::::::::::::::::::::formulario 2   pago con tarjera:::::::::::::::::::::::::::::::::::::::::::::::::::::


var nombreTarjeta=document.querySelector('#nombre-titular-tarjeta');
var numeroTarjeta=document.querySelector('#numero-tarjeta');


function validarDatos2(){
    // nombreTarjeta.addEventListener('input', validarNombreTarjerta);
    // numeroTarjeta.addEventListener('input', validarNumeroTarjerta);

validarNombreTarjerta();
validarNumeroTarjerta(); 

}



// --------------------validar nombre y ap de tarjeta-------------
function validarNombreTarjerta(){
    // let cadenaText = nombreTarjeta.split("")

    // for (let index = 0; index < cadenaText.length; index++) {
    //     if (parseInt(cadenaText[index])) {
    //         alert(`El campo debe contener LETRAS solamente.`)      
    //         return true
    //     }
    // }

    // return false
    console.log(nombreTarjeta)
    console.log("funciona")

    // const valoresNumericos = /^[0-9]+$ /;
    // const valoresLetras =  /^[A-Za-z] /;
    // var ExpRegSoloLetras="^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
    // ExpRegNomApe="^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$";
 
//    ::::::::::::::::rehacer::::::::::::::::::::
    // if(nombreTarjeta.value==''){
    //     nombreTarjeta.style.backgroundColor="#f07676"
    //     nombreTarjeta.setCustomValidity('Ingrese su nombre completo por favor');
    // }
    
    // else if(nombreTarjeta.value.length<=10 | nombreTarjeta.value.length>=100){
    //     nombreTarjeta.style.backgroundColor="#f07676"
    //     nombreTarjeta.setCustomValidity('Caracteres permitidos mínimo:10 y máximo:100 ');
    //  }
    // else if(/^([0-9])*$/.test(nombreTarjeta)==false){
    //         nombreTarjeta.style.backgroundColor="#f07676"
    //         nombreTarjeta.setCustomValidity('ingrese letras ');
    //      }
     
    // else if ( nombreTarjeta.match(ExpRegNomApe)==null){
    //     nombreTarjeta.style.backgroundColor="#f07676"
    //     nombreTarjeta.setCustomValidity('Ingrese letras por favor');
    //     console.log("ingrse letra")
    //  }
    //   else{
    //     nombreTarjeta.style.backgroundColor="#4fa5f5"
    //     nombreTarjeta.setCustomValidity('')
    //  }
} 
// else if (/^([0-9])*$/.test(caja1))
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// -------------validar numero de tarjeta-----------------------

function validarNumeroTarjerta(){
    if(numeroTarjeta.value==''){
        numeroTarjeta.style.backgroundColor="#f07676"
        numeroTarjeta.setCustomValidity('Ingrese su nombre por favor');
    }
    // else if(numeroTarjeta.value.length<=16 | numeroTarjeta.value.length>=16){
    //     numeroTarjeta.style.backgroundColor="#f07676"
    //     numeroTarjeta.setCustomValidity('Ingresá los números que figuran al frente de la tarjeta. Ejemplo: 1234 5678 9101 1213 ');
    //  }
    else if(isNaN(numeroTarjeta.value)){
        numeroTarjeta.style.backgroundColor="#f07676"
        numeroTarjeta.setCustomValidity('Ingrese numero de tarjeta por favor');
    }
     else{
        numeroTarjeta.style.backgroundColor="#4fa5f5"
        numeroTarjeta.setCustomValidity('')
     }
}



// window.addEventListener('load', validarDatos2)


// function enviar1(){
    var boton1=document.querySelector('#button2')
    // boton1.addEventListener('click', validarNombreTarjerta)
//  console.log(boton1) 
// }

function enviarFormulario1(){
//     alert("funk")
//    var formulario1=document.querySelector('#formulario2')
//    var valido=formulario1.checkValidity()
//    if(valido){enviar1
//        formulario1.submit()
//        alert('formulario enviado')

// } else{
//        alert('El formulario no puede ser enviado')
//    

 
}


// window.addEventListener('load',enviar1)
