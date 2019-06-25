'use strict'

/* Datos 

- Indefinidos:
    - underfine
-Primitivos
    - number
    - string
    - boolean
- Referenciados:
    - objects
            - array
            - date
            - error
            - regexp
            - math
            - function

*/

/* variables

    - tipo: debiñes (implicitos al valor) y dinamicos
    - ciclo de vida
        - declaracion : inicializacion : asignacion
*/

let x = 34 // declaracion + inicializacion

//....
//....
x = 45 // asignacion
x = x * 2 // asignacion por expresiones

/* ambito
    - global
    - local
        - al bloque => ler / const
        - a la funcion => var
*/

let a = 31 // global
console.log('variable local al bloque', a) // 31
let b = 67

function prueba() {
    let a = 12 // local a la función
    console.log('Variable local a la funcion', a) // 12

    console.log('z vale ', z)
    var z = 7
    if (true) {
        let a = 78 // local al bloque
        var z = 23  
        console.log('Variable local al bloque',a) // 78
        console.log(b)
    }
    console.log(z) // 23
}

prueba()

/* constantes
    - ciclo de vida: declaración + inicialización
 */

const IVA = 1.26
// IVA = 1.34 // -> DA ERROR

/* constantes referenciadas -> es constante la referencia */

const user = {nombre: 'Pepe', edad: 34}
user.nombre = 'Juan'
user.edad = 32
console.log(user)
// user = {nombre: 'Juan', edad: 32} -> Error
// user = 34 -> Error
console.log(user)


// hoisting de funciones declaradas y variables var

izar ()

function izar() {
    console.log('izado')
    console.log('z vale ', z)
    var z = 7
}

/* lo que pasa realmente 
function izar() {
    var z
    console.log('izado')
    console.log('z vale ', z)
    z = 7
}
*/

/**  Casting
    *cambio de tipo temporal durante una operación
 */

// casting a string
 let n = 23
 let msg = 'Juan tiene ' + n // 'Juan tiene 23'
 console.log(typeof n)

// casting a number
 let indice = '34'
 let incremento = indice * 0.10

// EN JS TODOS LOS DATOS HACEN CASTING A NUMBER -> NaN
let tipo = 'indefinido'
let sueldo = 23 * tipo
let datoRaro = 23 / 0

console.log('sueldo: ', sueldo)
console.log('datoRaro: ', datoRaro)

// casting a boolean
// EN JS TODOS LOS DATOS HACEN CASTING A BOOLEAN

let w

// Falsy
w = false
w = undefined
w = null
w = 0
w = NaN
w = ''


// Truly
w = true
w = 23
w = -34
w = ' '
w = 'Pepe'
w = {}
w = []

if (w) {}

// operadores en JS
// aritméticos: + - * / %

/* en C#

int x = 0
int y = 2
int z = x/y // 4
int r = x%y 

parseInt(7/3) // 2
7%3 // 1 */

// operadores de asignacion

let x = 45
x = 86

// operadores de comparacion

// igualdad
(x == 67) // false
(x == 86) // true
(x == '86') // true

// identidad
(x === '86') // false

// otros > < >= <=

// negacion !

// no igualdad
(x != '86') // false

// no identidad
(x !== '86') // true

