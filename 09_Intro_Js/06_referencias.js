'user strict'

// valores primitivos
// (number, string, boolean, undefined)


let a = 2
let b = a // asignación de valor
console.log('Al crear b', a, b)
b = b * b
a = a / 2
console. log('Valor de b', b) // 4
console.log('Valor de a', a) // 1

b = a
console.log('valor de b' , b)

// valores referenciados

let p1 = {nombre : 'Pepe' , edad : 14}
let p2 = p1 // asignación de referencia
p1.nombre = 'Juan'
console.log(p1) 
console.log(p2)


let a1 = {nombre : 'Raquel' , edad : 34, saldo : 1000}
let a2 = {nombre : 'Maria' , edad : 34, saldo : 1200}
let a3 = {nombre : 'Juan' , edad : 34, saldo : 1300}

/* function inscribirMal(alumno) {
    a1.curso = 'JS'    
    
} */ // solo puede inscribir a uno

function inscribirEnJS(alumno) {
    if (alumno) {
        alumno.curso = 'JS'    
    } 
}

inscribirEnJS(a1) // paso por referencia
inscribirEnJS(a2) 
inscribirEnJS(a3) 
console.log(a1)
console.log(a2)
console.log(a3)


function invertir(x) {
    let z = Math.random()
    let rendimiento = (x * z) / 10
    return (x + rendimiento).toFixed(2) 
}

a1.saldoNew = invertir(a1.saldo) // paso por valor
a2.saldoNew = invertir(a2.saldo) 
a3.saldoNew = invertir(a3.saldo)
console.log(a1)
console.log(a2) 
console.log(a3)



/*function sumar(a,b) {return a + b}

sumar(3,7)

function restar(a,b) {return a - b}

console.log(restar(3,7))*/
