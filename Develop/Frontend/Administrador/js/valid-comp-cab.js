function validarCabania(){
    // Validación de "Agregar Cabaña"
    let nomCab = document.getElementById("nomCab").value
    let lblnomCab = document.getElementById("lblNomCab").textContent
    
    if (validarVacio(nomCab, lblnomCab)) {
        document.getElementById("nomCab").focus()
        return 0
    } 

    
    let dormCab = document.getElementById("dormCab").value
    let lblDormCab = document.getElementById(`lblDormCab`).textContent

    if (validarVacio(dormCab, lblDormCab)){
        document.getElementById("dormCab").focus()
        return 0
    } else if(validarEntero(cantDormitorios)){
        document.getElementById("dormCab").focus()
        return 0
    }


    let plazaCab = document.getElementById("plazaCab").value
    let lblPlazaCab = document.getElementById("lblPlazaCab").textContent
    if (validarVacio(plazaCab, lblPlazaCab)){
        document.getElementById("plazaCab").focus()
        return 0
    } else if(validarEntero(plazaCab, lblPlazaCab)){ 
        document.getElementById("plazaCab").focus()
        return 0
    }


    let camasDobles = document.getElementById("camasDobles").value
    let lblCamasDobles = document.getElementById("lblCamasDobles").textContent
    if (validarVacio(camasDobles, lblCamasDobles)){
        document.getElementById("camasDobles").focus()
        return 0
    } else if(validarEntero(camasDobles, lblCamasDobles)){
        document.getElementById("camasDobles").focus()
        return 0
    }


    let camasSimples = document.getElementById("camasSimples").value
    let lblCamasSimples = document.getElementById("lblCamasSimples").textContent
    if (validarVacio(camasSimples, lblCamasSimples)){
        document.getElementById("camasSimples").focus()
        return 0
    } else if(validarEntero(camasSimples, lblCamasSimples)){
        document.getElementById("camasSimples").focus()
        return 0
    }

    alert("¡¡Se ha agregado la cabaña con éxito!!")
    document.fvalida.submit()

}

function validarComplejo(){
    
    let nomComplejo = document.getElementById("nomComplejo").value
    let lblNomComplejo = document.getElementById("lblNomComplejo").textContent
    
    if (validarVacio(nomComplejo, lblNomComplejo)) {
        document.getElementById("nomComplejo").focus()
        return 0
    } 

    
    let cabComplejo = document.getElementById("cabComplejo").value
    let lblCabComplejo = document.getElementById("lblCabComplejo").textContent

    if (validarVacio(cabComplejo, lblCabComplejo)){
        document.getElementById("cabComplejo").focus()
        return 0
    } else if(validarEntero(cabComplejo, lblCabComplejo)){
        document.getElementById("cabComplejo").focus()
        return 0
    }

    // Validamos select provincia y ciudad, que elija al menos una opción.
    if(document.getElementById("provComplejo").selectedIndex == 0){
        alert("Debe seleccionar una provincia.")
        document.getElementById("provComplejo").focus()
        return 0
    }

    if(document.getElementById("ciudComplejo").selectedIndex == 0){
        alert("Debe seleccionar una ciudad.")
        document.getElementById("ciudComplejo").focus()
        return 0
    }


    // Valida direccion y numeración.
    let dirComplejo = document.getElementById("dirComplejo").value
    let lblDirComplejo = document.getElementById("lblDirComplejo").textContent

    if (validarVacio(dirComplejo, lblDirComplejo)) {
        document.getElementById("dirComplejo").focus()
        return 0
    } else if(validarTexto(dirComplejo, lblDirComplejo)){
        document.getElementById("dirComplejo").focus()
        return 0
    }


    let numComplejo = document.getElementById("numComplejo").value
    let lblNumComplejo = document.getElementById("lblNumComplejo").textContent

    if (validarVacio(numComplejo, lblNumComplejo)){
        document.getElementById("numComplejo").focus()
        return 0
    } else if(validarEntero(numComplejo, lblNumComplejo)){
        document.getElementById("numComplejo").focus()
        return 0
    }
    
    
    alert("¡¡Se ha agregado el complejo con éxito!!")
    document.fvalida.submit()

}

// Manipula el contenido del label para otorgar un texto sin los ":" finales.
function alertaLabel(lbl){
    lbl = lbl.substring(0, lbl.length - 1) // Elimina 2 puntos.
    return lbl
}

// Valida que un input no quede vacío.
function validarVacio(text, lbl) {
    
    if (text.length == " "){
        alert(`El campo '${alertaLabel(lbl)}' no puede estar vacío.`)
        return true
    }

    return false
}

// Valida que un campo sea de solo caracteres alfabéticos. 
function validarTexto(text,lbl) {
    let cadenaText = text.split("")

    for (let index = 0; index < cadenaText.length; index++) {
        if (parseInt(cadenaText[index])) {
            alert(`El campo '${alertaLabel(lbl)}' debe contener LETRAS solamente.`)      
            return true
        }
    }

    return false
}

// Valida que un campo sea de solo números.
function validarEntero(val, lbl) {
    num = parseInt(val)

    if (isNaN(val)) {
        alert(`El campo '${alertaLabel(lbl)}' debe contener NÚMEROS solamente.`)
        return true
    } 
    return false
}




