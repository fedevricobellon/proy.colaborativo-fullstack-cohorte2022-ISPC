function validarNuevaCuenta() {

    // Validamos el nombre que sean solo caracteres.
    let cadenaNombre = document.fvalida.nombre.value.split("")

    if (cadenaNombre == "") {
        alert("El nombre no puede estar vacío.")
        document.fvalida.nombre.focus()
        return 0
    }

    for (let index = 0; index < cadenaNombre.length; index++) {
        if (parseInt(cadenaNombre[index])) {
            alert("El nombre no puede contener numeros.")
            document.fvalida.nombre.focus() 
            return 0
        }
        if(cadenaNombre[index] == " "){
            alert("El nombre no puede contener espacios.")
            document.fvalida.nombre.focus() 
            return 0
        }
    }

    // Validamos mail con JS
    if (document.fvalida.email.value.length == 0) {
        alert("Tiene que escribir su email.")
        document.fvalida.email.focus()
        return 0
    }

    let cadenaEmail = document.fvalida.email.value.split("")
    let contarPuntos = 0
    let contarArrobas = 0

    for (let index = 0; index < cadenaEmail.length; index++) {
        if (cadenaEmail[index] == " ") {
            alert("El email no puede contener espacios en blanco.")
            document.fvalida.email.focus()
            return 0;
        }

        if (cadenaEmail[index] == "@") {
            contarArrobas++
            if (contarArrobas > 1) {
                alert("El email debe contener solo una arroba.")
                document.fvalida.email.focus()
                return 0
            }
        }

        if (cadenaEmail[index] == ".") {
            contarPuntos++
        }
    }

    if (contarArrobas < 1) {
        alert("El email debe contener una arroba.")
        document.fvalida.email.focus()
        return 0
    }

    if (contarPuntos <= 0) {
        alert("El email debe contener al menos un punto.")
        document.fvalida.email.focus()
        return 0
    }




    // Verificación contraseña.
    let cadenaPassword = document.fvalida.password.value.split("")
    let letrasMayusculas = "ZXCVBNMASDFGHJKLÑPOIUYTREWQ"
    let numeros = "1234567890"
    let cadenaLetrasMayusculas = letrasMayusculas.split("")
    let cadenaNumeros = numeros.split("")
    let contadorMayusculas = 0
    let contadorNumeros = 0


    if (document.fvalida.password.value == "") {
        alert("La contraseña no puede estar vacía.")
        document.fvalida.password.focus()
        return 0
    }

    for (let i = 0; i < cadenaPassword.length; i++) {
        for (let j = 0; j < cadenaLetrasMayusculas.length; j++) {
            if (cadenaPassword[i] == cadenaLetrasMayusculas[j]) {
                contadorMayusculas++;
            }
        }
        for (let j = 0; j < cadenaNumeros.length; j++) {
            if (cadenaPassword[i] === cadenaNumeros[j]) {
                contadorNumeros++;
            }
        }

    }
    if (contadorMayusculas < 1) {
        alert("La contraseña debe contener al menos una letra mayúscula.")
        document.fvalida.password.focus()
        return 0
    }
    if (contadorNumeros < 1) {
        alert("La contraseña debe contener al menos un número.")
        document.fvalida.password.focus()
        return 0
    }

    // verificación de las dos passwords.

    if (document.fvalida.password.value !== document.fvalida.password2.value) {
        alert("Las contraseñas no coinciden")
        document.fvalida.password2.focus()
        return 0;
    }

    alert("¡¡Usted se ha registrado con éxito!!")
    document.fvalida.submit()
}