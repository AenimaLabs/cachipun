//este programa no funciona óptimamente si sólo se pone un acento o un carácter similar

//se pide al usuario que ingrese la cantidad de veces que quiere jugar
let cant_veces = prompt("Ingrese cantidad de veces que quiere jugar")

//se comprueba si el usuario ingresó un número
//si el usuario no ingresa un número, se le reta y se le vuelve a preguntar, hasta que ingrese un número 
while (isNaN(cant_veces)) {
    alert("Elige un número te están diciendo... NÚMERO! NU-ME-RO!")
    cant_veces = prompt("Ingrese cantidad de veces que quiere jugar")
}

//si el número ingresado es menor o igual a cero, le responde que es aburrido
//se termina el programa
if (parseInt(cant_veces) <= 0) {
    alert("Eres la persona más aburrida del mundo, CHAO!")
}

//si el número es mayor que cero
else {
    //ciclo for que se repite según la cantidad de veces que el usuario ingresó
    // ojo que funciona igual sólo con cant_veces sin pasarla a entero
    for (let i = 0; i < parseInt(cant_veces); i++) {
        //se le pregunta por su elección
        let jugada = prompt("Ingrese 0 para elegir piedra, 1 para papel, 2 para tijera")
        //se valida si es que los datos son válidos y de no serlo lo trata de porfiado
        //además le sigue preguntando hasta que ingrese una opción válida
        while (parseInt(jugada) < 0 || parseInt(jugada) > 2 || isNaN(jugada)) {
            jugada = prompt("Ingrese 0 para elegir piedra, 1 para papel, 2 para tijera, no sea porfiado")
        }
        //una vez ingresada una opción válida, se pasa de string a entero
        jugada = parseInt(jugada)
        //se asigna la jugada de la máquina de manera aleatoria y sacando sólo la parte entera
        let j_machine = Math.floor(Math.random() * 3)
        //se envían alertas utilizando funciones
        alert("Elegiste " + identificar_jugada(jugada))
        alert("La máquina eligió " + identificar_jugada(j_machine))
        alert("" + resultado(jugada, j_machine))
    }
}

//tengo la siguiente duda; al poner return dentro del case ... es necesario el break?

//lo que hace esta función es identificar la jugada del usuario
function identificar_jugada(n) {
    switch (n) {
        case 0:
            return "piedra"
            break;

        case 1:
            return "papel"
            break;

        default:
            return "tijera"
            break;
    }
}
//compara la jugada de la máquina y la del usuario, usando 0 1 2
//entrega un resultado
function resultado(a, b) {
    if (a == 0) {
        switch (b) {
            case 0:
                return "Empate"
                break
            case 1:
                return "Perdiste, waja"
                break
            case 2:
                return "Bieeennnn... ganaste"

        }
    }
    if (a == 1) {
        switch (b) {
            case 0:
                return "Bieeennnn... ganaste"
                break
            case 1:
                return "Empate"
                break
            case 2:
                return "Perdiste, waja"
        }
    }

    else {
        switch (b) {
            case 0:
                return "Perdiste, waja"
                break
            case 1:
                return "Bieeennnn... ganaste"
                break
            case 2:
                return "Empate"
                break
        }
    }

}

