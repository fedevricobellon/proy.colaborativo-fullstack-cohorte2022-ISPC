function validarCabania() {
    // Validación de "Agregar Cabaña"
    let nomCab = document.getElementById("nomCab").value
    let lblnomCab = document.getElementById("lblNomCab").textContent

    if (validarVacio(nomCab, lblnomCab)) {
        document.getElementById("nomCab").focus()
        return 0
    }


    let dormCab = document.getElementById("dormCab").value
    let lblDormCab = document.getElementById(`lblDormCab`).textContent

    if (validarVacio(dormCab, lblDormCab)) {
        document.getElementById("dormCab").focus()
        return 0
    } else if (validarEntero(cantDormitorios)) {
        document.getElementById("dormCab").focus()
        return 0
    }


    let plazaCab = document.getElementById("plazaCab").value
    let lblPlazaCab = document.getElementById("lblPlazaCab").textContent
    if (validarVacio(plazaCab, lblPlazaCab)) {
        document.getElementById("plazaCab").focus()
        return 0
    } else if (validarEntero(plazaCab, lblPlazaCab)) {
        document.getElementById("plazaCab").focus()
        return 0
    }


    let camasDobles = document.getElementById("camasDobles").value
    let lblCamasDobles = document.getElementById("lblCamasDobles").textContent
    if (validarVacio(camasDobles, lblCamasDobles)) {
        document.getElementById("camasDobles").focus()
        return 0
    } else if (validarEntero(camasDobles, lblCamasDobles)) {
        document.getElementById("camasDobles").focus()
        return 0
    }


    let camasSimples = document.getElementById("camasSimples").value
    let lblCamasSimples = document.getElementById("lblCamasSimples").textContent
    if (validarVacio(camasSimples, lblCamasSimples)) {
        document.getElementById("camasSimples").focus()
        return 0
    } else if (validarEntero(camasSimples, lblCamasSimples)) {
        document.getElementById("camasSimples").focus()
        return 0
    }

    alert("¡¡Se ha agregado la cabaña con éxito!!")
    document.fvalida.submit()
    window.location.href = "admin-inicio.html"
}

function validarComplejo() {

    let nomComplejo = document.getElementById("nomComplejo").value
    let lblNomComplejo = document.getElementById("lblNomComplejo").textContent

    if (validarVacio(nomComplejo, lblNomComplejo)) {
        document.getElementById("nomComplejo").focus()
        return 0
    }


    let cabComplejo = document.getElementById("cabComplejo").value
    console.log(cabComplejo)
    let lblCabComplejo = document.getElementById("lblCabComplejo").textContent

    if (validarVacio(cabComplejo, lblCabComplejo)) {
        document.getElementById("cabComplejo").focus()
        return 0
    } else if(validarVaciosInternos(cabComplejo, lblCabComplejo)) {
        document.getElementById("cabComplejo").focus()
        return 0
    }
    else if (validarEntero(cabComplejo, lblCabComplejo)) {
        document.getElementById("cabComplejo").focus()
        return 0
    }

    // Validamos select provincia y ciudad, que elija al menos una opción.
    if (document.getElementById("provComplejo").selectedIndex == 0) {
        alert("Debe seleccionar una provincia.")
        document.getElementById("provComplejo").focus()
        return 0
    }

    if (document.getElementById("ciudComplejo").selectedIndex == 0) {
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
    } else if (validarTexto(dirComplejo, lblDirComplejo)) {
        document.getElementById("dirComplejo").focus()
        return 0
    }


    let numComplejo = document.getElementById("numComplejo").value
    let lblNumComplejo = document.getElementById("lblNumComplejo").textContent

    if (validarVacio(numComplejo, lblNumComplejo)) {
        document.getElementById("numComplejo").focus()
        return 0
    } else if (validarEntero(numComplejo, lblNumComplejo)) {
        document.getElementById("numComplejo").focus()
        return 0
    }


    alert("¡¡Se ha agregado el complejo con éxito!!")
    document.fvalida.submit()
    window.location.href = "admin-inicio.html"

}

function validarPerfilAdmin() {
    let nombAdmin = document.getElementById("nombAdmin").value
    let lblNombAdmin = document.getElementById("lblNombAdmin").textContent

    if (validarVacio(nombAdmin, lblNombAdmin)) {
        document.getElementById("nombAdmin").focus()
        return 0
    } else if (validarTexto(nombAdmin, lblNombAdmin)) {
        document.getElementById("nombAdmin").focus()
        return 0
    } else if (validarVaciosInternos(nombAdmin, lblNombAdmin)){
        document.getElementById("nombAdmin").focus()
        return 0
    }


    let apellidoAdmin = document.getElementById("apellidoAdmin").value
    let lblApellidoAdmin = document.getElementById("lblApellidoAdmin").textContent

    if (validarVacio(apellidoAdmin, lblApellidoAdmin)) {
        document.getElementById("apellidoAdmin").focus()
        return 0
    } else if (validarTexto(apellidoAdmin, lblApellidoAdmin)) {
        document.getElementById("apellidoAdmin").focus()
        return 0
    } else if (validarVaciosInternos(apellidoAdmin, lblApellidoAdmin)){
        document.getElementById("apellidoAdmin").focus()
        return 0
    }


    let dniAdmin = document.getElementById("dniAdmin").value
    let lblDniAdmin = document.getElementById("lblDniAdmin").textContent

    if (validarVacio(dniAdmin, lblDniAdmin)) {
        document.getElementById("dniAdmin").focus()
        return 0
    } else if (validarEntero(dniAdmin, lblDniAdmin)) {
        document.getElementById("dniAdmin").focus()
        return 0
    }else if (dniAdmin < 5000000) {
        alert("El N° de DNI no puede ser inferior a 5.000.000")
        document.getElementById("dniAdmin").focus()
        return 0
    } else if (dniAdmin > 99999999) {
        alert("El N° de DNI no puede ser superior a 99.999.999")
        document.getElementById("dniAdmin").focus()
        return 0
    } 


    let nacAdmin = document.getElementById("nacAdmin").value
    let lblNacAdmin = document.getElementById("lblNacAdmin").textContent

    if (validarVacio(nacAdmin, lblNacAdmin)) {
        document.getElementById("nacAdmin").focus()
        return 0
    }


    let contactoAdmin = document.getElementById("contactoAdmin").value
    let lblContactoAdmin = document.getElementById("lblContactoAdmin").textContent

    if (validarVacio(contactoAdmin, lblContactoAdmin)) {
        document.getElementById("contactoAdmin").focus()
        return 0
    } else if (validarEntero(contactoAdmin, lblContactoAdmin)) {
        document.getElementById("contactoAdmin").focus()
        return 0
    }

    alert("¡¡Se ha completado el perfil con éxito!!")
    document.fvalida.submit()
    window.location.href = "admin-inicio.html"
}

function validarReservaAdmin() {

    let ingresoReserva = document.getElementById("ingresoReserva").value
    let lblIngresoReserva = document.getElementById("lblIngresoReserva").textContent

    if (validarVacio(ingresoReserva, lblIngresoReserva)) {
        document.getElementById("ingresoReserva").focus()
        return 0
    }


    let salidaReserva = document.getElementById("salidaReserva").value
    let lblSalidaReserva = document.getElementById("lblSalidaReserva").textContent

    if (validarVacio(salidaReserva, lblSalidaReserva)) {
        document.getElementById("salidaReserva").focus()
        return 0
    }


    let personasReserva = document.getElementById("personasReserva").value
    let lblPersonasReserva = document.getElementById("lblPersonasReserva").textContent

    if (validarVacio(personasReserva, lblPersonasReserva)) {
        document.getElementById("personasReserva").focus()
        return 0
    } else if (validarEntero(personasReserva, lblPersonasReserva)) {
        document.getElementById("personasReserva").focus()
        return 0
    } else if (validarVaciosInternos(personasReserva, lblPersonasReserva)) {
        document.getElementById("personasReserva").focus()
        return 0
    } 


    let seniaReserva = document.getElementById("seniaReserva").value
    let lblSeniaReserva = document.getElementById("lblSeniaReserva").textContent

    if (validarVacio(seniaReserva, lblSeniaReserva)) {
        document.getElementById("seniaReserva").focus()
        return 0
    } else if (validarEntero(seniaReserva, lblSeniaReserva)) {
        document.getElementById("seniaReserva").focus()
        return 0
    } else if (validarVaciosInternos(seniaReserva, lblSeniaReserva)) {
        document.getElementById("seniaReserva").focus()
        return 0
    }

    let totalReserva = document.getElementById("totalReserva").value
    let lblTotalReserva = document.getElementById("lblTotalReserva").textContent

    if (validarVacio(totalReserva, lblTotalReserva)) {
        document.getElementById("totalReserva").focus()
        return 0
    } else if (validarEntero(totalReserva, lblTotalReserva)) {
        document.getElementById("totalReserva").focus()
        return 0
    } else if (validarVaciosInternos(totalReserva, lblTotalReserva)) {
        document.getElementById("totalReserva").focus()
        return 0
    } 

    let nombreReserva = document.getElementById("nombreReserva").value
    let lblNombreReserva = document.getElementById("lblNombreReserva").textContent

    if (validarVacio(nombreReserva, lblNombreReserva)) {
        document.getElementById("nombreReserva").focus()
        return 0
    } else if (validarTexto(nombreReserva, lblNombreReserva)) {
        document.getElementById("nombreReserva").focus()
        return 0
    } else if (validarVaciosInternos(nombreReserva, lblNombreReserva)) {
        document.getElementById("nombreReserva").focus()
        return 0
    } 


    let apellidoReserva = document.getElementById("apellidoReserva").value
    let lblApellidoReserva = document.getElementById("lblApellidoReserva").textContent

    if (validarVacio(apellidoReserva, lblApellidoReserva)) {
        document.getElementById("apellidoReserva").focus()
        return 0
    } else if (validarTexto(apellidoReserva, lblApellidoReserva)) {
        document.getElementById("apellidoReserva").focus()
        return 0
    } else if (validarVaciosInternos(apellidoReserva, lblApellidoReserva)) {
        document.getElementById("apellidoReserva").focus()
        return 0
    } 


    let dniReserva = document.getElementById("dniReserva").value
    let lblDniReserva = document.getElementById("lblDniReserva").textContent

    if (validarVacio(dniReserva, lblDniReserva)) {
        document.getElementById("dniReserva").focus()
        return 0
    } else if (validarEntero(dniReserva, lblDniReserva)) {
        document.getElementById("dniReserva").focus()
        return 0
    } else if (dniReserva < 5000000) {
        alert("El N° de DNI no puede ser inferior a 5.000.000")
        document.getElementById("dniReserva").focus()
        return 0
    } else if (dniReserva > 99999999) {
        alert("El N° de DNI no puede ser superior a 99.999.999")
        document.getElementById("dniReserva").focus()
        return 0
    }


    let mailReserva = document.getElementById("mailReserva").value
    let lblMailReserva = document.getElementById("lblMailReserva").textContent

    if (validarVacio(mailReserva, lblMailReserva)) {
        document.getElementById("mailReserva").focus()
        return 0
    }

    let cadenaEmail = mailReserva.split("")
    let contarPuntos = 0
    let contarArrobas = 0

    for (let index = 0; index < cadenaEmail.length; index++) {
        if (cadenaEmail[index] == " ") {
            alert("El email no puede contener espacios en blanco.")
            document.getElementById("mailReserva").focus()
            return 0;
        }

        if (cadenaEmail[index] == "@") {
            contarArrobas++
            if (contarArrobas > 1) {
                alert("El email debe contener solo una arroba.")
                document.getElementById("mailReserva").focus()
                return 0
            }
        }

        if (cadenaEmail[index] == ".") {
            contarPuntos++
        }
    }

    if (contarArrobas < 1) {
        alert("El email debe contener una arroba.")
        document.getElementById("mailReserva").focus()
        return 0
    }

    if (contarPuntos <= 0) {
        alert("El email debe contener al menos un punto.")
        document.getElementById("mailReserva").focus()
        return 0
    }


    let telReserva = document.getElementById("telReserva").value
    let lblTelReserva = document.getElementById("lblTelReserva").textContent

    if (validarVacio(telReserva, lblTelReserva)) {
        document.getElementById("telReserva").focus()
        return 0
    } else if (validarEntero(telReserva, lblTelReserva)) {
        document.getElementById("telReserva").focus()
        return 0
    }

    alert("¡¡Se ha completado la reserva con éxito!!")
    document.fvalida.submit()
    window.location.href = "admin-inicio.html"
}


function validarConsultaReserva() {

    let fechaIngreso = document.getElementById("fechaIngreso").value
    let liFechaIngreso = document.getElementById("liFechaIngreso").textContent
    liFechaIngreso = `${liFechaIngreso}:`
    if (validarVacio(fechaIngreso, liFechaIngreso)) {
        document.getElementById("fechaIngreso").focus()
        return 0
    }


    let fechaEgreso = document.getElementById("fechaEgreso").value
    let liFechaEgreso = document.getElementById("liFechaEgreso").textContent
    liFechaEgreso = `${liFechaEgreso}:`
    if (validarVacio(fechaEgreso, liFechaEgreso)) {
        document.getElementById("fechaEgreso").focus()
        return 0
    }

    if (document.getElementById("numPersonas").selectedIndex == 0) {
        alert("Debe seleccionar 'N° Personas'.")
        document.getElementById("provComplejo").focus()
        return 0
    }


    if (document.getElementById("ciudadReserva").selectedIndex == 0) {
        alert("Debe seleccionar una 'Ciudad'.")
        document.getElementById("provComplejo").focus()
        return 0
    }

    alert("Pre-reserva efectuada con éxito. Será redirigido al 'Formulario de Reserva'.")
    window.location.href = "admin-reserva.html"
}

// Manipula el contenido del label para otorgar un texto sin los ":" finales.
function alertaLabel(lbl) {
    // Quitamos espacios innecesarios que se puedan haber generado.
    for (let i = 0; i < lbl.length; i++) {
        if(lbl[i] == " " && lbl[i+1] == " "){
            lbl.splice(i, 1)
        }        
    }
    lbl = lbl.substring(0, lbl.length - 1) // Elimina 2 puntos.
    return lbl
}

// Valida que un input no quede vacío.
function validarVacio(text, lbl) {
    let cadenaText = text.split("")
    if (text.length == " ") {
        alert(`El campo '${alertaLabel(lbl)}' no puede estar vacío.`)
        return true
    }
    if(cadenaText[0] == " "){
        alert(`El campo '${alertaLabel(lbl)}' no puede iniciar vacío.`)
        return true
    }
    if(cadenaText[-1] == " "){
        alert(`El campo '${alertaLabel(lbl)}' no puede finalizar vacío.`)
        return true
    }

    return false
}

// Valida que un campo sea de solo caracteres alfabéticos. 
function validarTexto(text, lbl) {
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
        alert(`El campo '${alertaLabel(lbl)}' debe contener NÚMEROS ENTEROS solamente.`)
        return true
    }
    return false
}

// Valida espacios internos que no deberían estar, como a la hora de colocar el apellido o nombre.
function validarVaciosInternos(val, lbl) {
    val = val.split("")
    for (let i = 0; i < val.length; i++) {
        if (val[i] == " ") {
            alert(`El campo '${alertaLabel(lbl)}' no puede tener ESPACIOS VACIOS.`)
            return true
        }
    }
}
