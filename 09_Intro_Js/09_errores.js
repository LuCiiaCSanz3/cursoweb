/** separación de responsabilidades */

function isValidNumber(n) {
    let r = true
    if (isNaN(n) || typeof n == 'boolean'
    || n === null ) {
        r = false
    }
    return  r 
}


function codificaEdad(edad) {
    let i = 3
    if (!isValidNumber(edad)) {
        i = -2
    } else if (edad < 0) {
        i = -1
    } else if (edad < 18) {
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
    let i = codificaEdad(edad)
    if (typeof i =='number' && (i >=0 || i <=3)) {
        console.log(`Con ${edad} años`, mensajes[i])
    } else {
        console.log('Error $(i)')
    }
}

let  e = 2
e = 18
e = 25
e = 35
e = 45
e = 55
e = 65
e = 0
e 

responderSegunEdad(e)
e = 4
/*e = '34'
e = 'Pepe'
e = true
e = false
e = {}
e = []
e = undefined
e = null
e = NaN*/ // Dan falso
console.log(e, isValidNumber(e))
