var nombre=document.querySelector("#nombre");
var apellido=document.querySelector("#apellido");
var email=document.querySelector("#email");
var celular=document.querySelector("#celular");
var direccion=document.querySelector("#calle-numero");
var codigoPostal=document.querySelector("#codigo-postal");


 function validarDatos(){
     nombre.addEventListener('input', validarNombre);
     apellido.addEventListener('input', validarApellido);
     email.addEventListener('input', validarEmail);
     celular.addEventListener('input', validarCelular);
     direccion.addEventListener('input', validarDireccion);
     codigoPostal.addEventListener('input', validarCodigoPostal);
    validarNombre();
    validarApellido(); 
    validarEmail();
    validarCelular(); 
    validarDireccion();
    validarCodigoPostal();
 }
// _______________validacion nombre_________________
 function validarNombre(){
    
     if(nombre.value==''){
         nombre.style.backgroundColor="#f07676"
         nombre.setCustomValidity('Ingrese su nombre por favor');
     } 
     else if(nombre.value.length<=2 | nombre.value.length>=35){
        nombre.style.backgroundColor="#f07676"
        nombre.setCustomValidity('Caracteres permitidos mínimo:3 y máximo:35 ');
     }
     else if(isNaN(nombre.value)){
        nombre.style.backgroundColor="#f07676"
        nombre.setCustomValidity('Ingrese letras por favor');
     }
      else{
        nombre.style.backgroundColor="#4fa5f5"
        nombre.setCustomValidity('')
     }
 }

 // _______________validacion apellido_________________
 function validarApellido(){
    if(apellido.value==''){
        apellido.style.backgroundColor="#f07676"
        apellido.setCustomValidity('Ingrese su apellido por favor');
    }
    else if(apellido.value.length<=2 | apellido.value.length>=35){
        apellido.style.backgroundColor="#f07676"
        apellido.setCustomValidity('Caracteres permitidos mínimo:3 y máximo:35 ');
     }
     else if(isNaN(apellido.value)==false){
        apellido.style.backgroundColor="#f07676"
        apellido.setCustomValidity('Ingrese letras por favor');
     }
      else{
        apellido.style.backgroundColor="#4fa5f5"
        apellido.setCustomValidity('')
     }
}

// _______________validacion email_________________
 function validarEmail(){
    if(email.value==''){
        email.style.backgroundColor="#f07676"
        email.setCustomValidity('Formato de Email valido: correo@ejemplo.com');
    } 
    else{
       email.style.backgroundColor="#4fa5f5"
       email.setCustomValidity('')
    }
}

// _______________validacion celular_________________
function validarCelular(){
    if(celular.value==''){
        celular.style.backgroundColor="#f07676"
        celular.setCustomValidity('Ingrese un telefono valido por favor');
    }
    else if(isNaN(celular.value)){
        celular.style.backgroundColor="#f07676"
        celular.setCustomValidity('Solo puede contener numero');
    }
    else{
       celular.style.backgroundColor="#4fa5f5"
       celular.setCustomValidity('')
    }
}

// _______________validacion direccion_________________
function validarDireccion(){
    const formato = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(direccion.value==''){
        direccion.style.backgroundColor="#f07676"
        direccion.setCustomValidity('Ingrese una dirección valida por favor');
    }
    else if(formato.test(direccion.value)){
        direccion.style.backgroundColor="#f07676"
        direccion.setCustomValidity('Ingrese solo caracteres alfanumericos por favor');
    }
    else{
       direccion.style.backgroundColor="#4fa5f5"
       direccion.setCustomValidity('')
    }
}

// _______________validacion codigo postal_________________
function validarCodigoPostal(){
    if(codigoPostal.value==''){
        codigoPostal.style.backgroundColor="#f07676"
        codigoPostal.setCustomValidity('Ingrese un Codigo Postal valido por favor');
    }
    else if(codigoPostal.value.length<=3 | codigoPostal.value.length>=8){
        codigoPostal.style.backgroundColor="#f07676"
        codigoPostal.setCustomValidity('Caracteres permitidos mínimo:4 y máximo:8 ');
     }
    else{
       codigoPostal.style.backgroundColor="#4fa5f5"
       codigoPostal.setCustomValidity('')
    }
}

 window.addEventListener('load', validarDatos)



/*validacion de formulario: checkValidity()*/ 

function enviar(){
    var boton=document.querySelector('#boton')
    boton.addEventListener('click', enviarFormulario)
}

function enviarFormulario(){
   var formulario=document.querySelector('#formulario')
   var valido=formulario.checkValidity()
   if(valido){
       formulario.submit()
       alert('formulario enviado')
   } else{
       alert('El formulario no puede ser enviado')
   }
}

window.addEventListener('load',enviar)

