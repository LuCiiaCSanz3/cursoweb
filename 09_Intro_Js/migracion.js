'user strict'
/* Datos 

-Indefinidos:
    -undefined
-Primitivos:
    -number
    -string
    -boolean
-Referencíados: 
    -objects
            -array
            -date
            -error
            -RegExp
            -math
            -json
            -function
*/

/* variables
    -Tipos: débiles (implícitos al valor) y dinámicos
    -Ciclo de vida
        -declaración: inicialización: asignación 
*/

let x = 34 // declaración + inicialización
//....
//....
x = 45 // asignación
x = x * 2 // asignación por expresiones

/* ámbito
    -global
    -local
        -al bloque => let / const
        -a la función => var
 */

let a = 31 // global

console.log('Variable global', a) // 31
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

// casting a boolean

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




