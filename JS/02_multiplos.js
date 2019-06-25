'use strict'
// Ejemplo de iteración y condición

let limite = 10
let acumulador = 0
let maximo = 100
let contador = 0
for (let i = 0; i < limite; i++) {
    contador = i
    console.log(i)
    if ( acumulador + (i*i) > maximo) {
        break
    }
    acumulador +=  + (i*i)
}
console.log(acumulador, contador)

/**JSDoc
 * Saber si un numero es múltiplos de tres,
 * seleccionar en un array los que lo sean, guardarlos en otro array y 
 * mostrarlo por pantalla
 * 
 */

 /** function isMultiplo
  * @description devuelve true si un numero m es multiplo de n
  * @param {number}: m
  * @param {number}: n
  * @returns {boolean}
  */

function isMultiplo(m = 0, n = 0) {
    if(isNaN(m) || isNaN(n)) {
        throw new Error('Parametros no numericos')
    }
    let r = true
    if(m%n) { // m%n != 0)
        r = false
    }
    return r
}

/**
 * @description muestra un array con los multiplos de n
 * @param {number} n 
 * @param {Array} aDatos 
 * @returns {vold}
 */
function mostrarMultiplos(n , aDatos) {
    console.clear()
    console.log(`Los multiplos de ${n}`)
    console.log(`en el array ${aDatos} son:`)
    console.log(extraerMultiplos(n, aDatos))
}

// espectativas
console.log('isMultiplo(2,20) debe dar true')
// prueba
console.log(isMultiplo(2,20))
// espectativas
console.log('isMultiplo(2,21) debe dar false')
// prueba
console.log(isMultiplo(2,21))

/** function extraerMultiplos
 * @description extraer de un array los multiplos de n
 * @param {number}: n
 * @param {array}: aDatos
 * @returns {array}
 */

function extraerMultiplos(n = 0, aDatos = []) {
    let r = []
    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        if (isMultiplo(item ,n)) {
           // r[r.length] = item
            r.push(item)
        }
    }
    return r
}

/*for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

n%3 == 0 */

isMultiplo()

module.exports = {};
module.exports.isMultiplo = isMultiplo
module.exports.extraerMultiplos = extraerMultiplos

{
let misDatos = [1,2,3,4,5,6,7,8,9]
mostrarMultiplos(2, misDatos)
}


