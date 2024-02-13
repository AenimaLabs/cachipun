//este programa no funciona óptimamente si sólo se pone un acento o un caracter similar en la cantidad de veces para jugar

//se pide al usuario que ingrese la cantidad de veces que quiere jugar
let cant_veces = prompt("Ingrese cantidad de veces que quiere jugar")

//se comprueba si el usuario ingresó un número
//si el usuario no ingresa un número, se le reta y se le vuelve a preguntar, hasta que ingrese un número 
while (isNaN(cant_veces))  {
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
        let jugada = prompt("Ingrese Piedra / Papel / Tijera")


        //validación del dato ingresado
        //lo insulta y le pregunta hasta que responda adecuadamente
        while (jugada !== "Tijera" && jugada !== "Papel" && jugada !== "Piedra") {
            alert("Elija lo que le están pidiendo, no sea bestia")
            jugada = prompt("Elija: Piedra / Papel / Tijera")
        }
   
        //se asigna la jugada de la máquina de manera aleatoria y sacando sólo la parte entera
        let j_machine = Math.floor(Math.random() * 3)
        alert("Elegiste " + jugada)
        //se envían alertas utilizando funciones
        alert("La máquina eligió " + identificar_jugada(j_machine))
        alert("" + resultado(jugada, j_machine))
    }
}

//tengo la siguiente duda; al poner return dentro del case ... es necesario el break?

//lo que hace esta función es identificar la jugada del usuario
function identificar_jugada(n) {
    switch (n) {
        case 0:
            return "Piedra"

            break;
        case 1:
            return "Papel"
            break;
        default:
            return "Tijera"
            break;
    }

}


//compara la jugada de la máquina y la del usuario, usando 0 1 2
//entrega un resultado
function resultado(a, b) {
    if (a == "Piedra") {
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
    if (a == "Papel") {
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

