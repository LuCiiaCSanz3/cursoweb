let x = 34
/*x = -5*/

console.log(x >= 0)

if (x >= 0) {
    console.log('Positivo')
} else {
    console.log('negativo')
}

let w

// Falsy
w = false
w = undefined
w = null
w = 0
w = ''
w = NaN

// True
w = true
w = 23
w = -34
w = ' '
w = 'Pepe'
w = {}
w = []

if (w) 
// if (Boolean(w)) 
{
    console.log('Verdadero')
} else {
    console.log('Falso')
}

/*let k
k = 34
k = '46'
k = '34 Pepes'
k = true
k = false
k = undefined
k = []
k = {}
k = [4]
k = [4, 8]
console.log(Number(k))*/

let q = 5
q = undefined
q = 0

//if (q !=0 ) {
if (q) {
    console.log('q tiene valor')
} else {
    console.log('q vale 0')
}

if (q === 0) {
    console.log('q es exactamente 0')
}

let a = 4
let b = '4'

console.log(a == b) // true
console.log(a === b) // false

let nota = 0

if (!nota) {
//if (nota != true) {
//if (nota == 0){
    console.log('Has sacado la nota minima')
}

let b1 = Boolean(nota)
b1 = !nota

let edad = 24

function comprobarEdad (edad) {
    let i = 3
    let mensajes = [
    'Eres menor de edad',
    'Eres joven',
    'Empieza a tener cuidado',
    'Lo siento por ti'
]
    if (edad < 18) {
        i = 0
    } else if (edad < 35) {
        i = 1
    } else if (edad < 50) {
        i = 2
    } /*else {
        i = 3
    }  */
    console.log(`Con ${edad} años`, mensajes[i])
}

/*let e = 53
comprobarEdad(e)*/

/** separacion de responsabilidades */

function codificaEdad(edad) {
    let i = 3
    if (edad < 18) {
        i = 0
    } else if (edad < 35) {
        i = 1
    } else if (edad < 50) {
        i = 2
    }
    return i
}
function responderSegunEdad (edad) {
    let mensajes = [
        'Eres menor de edad',
        'Eres joven',
        'Empieza a tener cuidado',
        'Lo siento por ti'
    ]
    console.log(`Con ${edad} años`, 
            mensajes[codificaEdad(edad)])
}

let e = 25
responderSegunEdad(e)