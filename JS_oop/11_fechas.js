
const x = {} // new Object() 
const a = [] // new array()
let c = 'pepe'
c.toUpperCase() // implicitamente new string(c)
let n = 223
n.toFixed(2) // implicitamente new number(n)
function Algo() {}//  new function()
const e = new Error('msg')

// otros objetos
const d = new Date()
const r = new RegExp()
const r1 = / /

// objetos no instanciables
Math.random()
Math.PI
//JSON.stringify()
//JSON.parse()

const fecha = new Date()
const america = new Date(1492, 6, 4)
const zz = new Date(2252653793)
const zx = new Date('1971-01-27')

console.log(fecha.valueOf())
console.log(america.valueOf())
console.log(zz)
console.log(zx.valueOf())

// mostrar fechas
console.log(fecha)
console.log(fecha.toString())
console.log(fecha.toUTCString())
console.log(fecha.toJSON())
console.log(fecha.toLocaleString())
console.log(fecha.toDateString())

// operaciones con las fechas

// get | getters
console.log(fecha.getTime())
console.log(fecha.getTimezoneOffset())
console.log(fecha)
console.log(fecha.getMonth())
console.log(fecha.getDay())

// set | setters
fecha.setDate()

