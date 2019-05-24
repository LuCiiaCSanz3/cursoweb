'use strict'

// undefined
// boolean
// number (int, float)
// string
// object

// declaración de la función
function sample() {
    // ES6
    /* let saludo  // declarar una variable => tipo undefined
    saludo = 'Hola' // inicializar la variable */
    let saludo = 'Hola' // declarar + inicializar

    // MALA PRÁCTICA
    //curso = 'JavaScript' // inicializar la variable

    console.log(saludo)
}

// let saludo = 'Hello'

function saludar(nombre = 'amigo') {
    let saludo = 'Hola ' 
    console.log(saludo + nombre)
}

// Invocación , ejecución, uso de una función
saludar('Pepe')
saludar('Lucia')
saludar()

//console.log(saludo)

/* separación de responsabilidades o intereses
    (separation of concerns - Edger W. Dijkstra)
*/


/** función suma
 * @description recibe dos parámetros y devuelve la suma de ambos
 * @param (number)
 * @param (number)
 * @returns (number)
 * 
 */

function suma(a = 0, b = 0) {
    /*let c = a + b
    return c */
    return a + b
}

/** función restar
 * @description recibe dos parámetros y devuelve la resta de ambos
 * @param (number) a
 * @param (number) b
 * @returns (number) c
 * 
 */
function restar(a = 13, b = 4) {
    let c = a - b
    return c
}

/** función multiplicar
 * @param (number) a
 * @param(number) b
 * @returns (number)
 * 
 */
function multiplicar(a = 0, b = 1) {
    return a * b
}

/** función dividir
 * @param (number) a
 * @param(number) b
 * @returns (number)
 * 
 */
function dividir(a = 0, b = 1) {
    return a / b
}

/** función mostrar
 * @description recibe dos parámetros y devuelve la resta de ambos
 * @param (string , number)
 * @returns (void)
 * 
 */
function mostrar(texto = '') {
    console.log(texto)
}

function probar() {
    let x = 2
    let y = 3
    mostrar(suma(x,y))
    mostrar(suma(x))
    mostrar(suma(undefined,y))
    mostrar(suma())
    mostrar()
    mostrar(resta(x,y))
    mostrar(multiplicar(x,y))
    mostrar(multiplicar(x,pepe))
    x = 4
    y = 2
    mostrar(dividir(x,y))
    mostrar(dividir(x))
    mostrar(dividir(undefined,2))   
}

probar()

