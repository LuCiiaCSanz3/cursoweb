'Use strict'

// Operaciones con numbers
let x = 2
let y = 3
let z = x * y

// Operaciones con numbers y strings
y = '3'
z =  x * y // Durante la operación el sistema invoca a una función que se llama función de casting , Number(y)
x = '5'
z = x * y

console.log(z, typeof z) // 6 // number
console.log(x, typeof x) // string
console.log(y, typeof y) // string

/* Sobrecarga de símbolo +
+3
"Hola" + "Pepe"
2+2
*/

let saludo = "Hola, " + "Pepe"

let w = x + y // No da 8, da '53' string
console.log(w, typeof w)

x = 23 
y = '20'
w = x + y // da '2320'
w = w * 1
console.log(w, typeof w)

/**
 * not !
 * Or || (rallita del 1)
 * And &&
 */

function sumar(a = 0, b = 0) {
    return a + b
}

function isValidNumber(n) {
    r = true
    if (isNaN(n) || typeof n == 'boolean'
    || Array.isArray(n) ) {
        r = false
    }
    return    
}

function sumar(a = 0, b = 0) {
    if (isNaN(a) || isNaN (b) 
    || typeof a == 'boolean' || typeof b == 'boolean'
    || typeof a == 'Object' || Array.isArray(b)
    ) {
        return 'No se puede sumar'
    }

    //let r = Number(a) + Number(b)
    //let r = parseFloat(a) + parseFloat(b)
    let r = +a + +b
    return 'la suma es ' + r
}

console.log(sumar())
console.log(sumar(undefined, undefined))
console.log(sumar(5))
console.log(sumar(2,2))
console.log(sumar(2,0))
console.log(sumar(0,2))
console.log(sumar(2,'5'))
console.log(sumar('2','5'))
console.log(sumar('2','Pepe'))
console.log(sumar('Juan','Pepe'))
console.log(sumar(2, true)) // el casting de true es uno
console.log(sumar(2, false)) 
console.log(sumar(true, false)) 
console.log(sumar({}, {})) 
console.log(sumar([], [])) 