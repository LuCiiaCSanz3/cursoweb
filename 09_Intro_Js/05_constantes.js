let a = 4
console.log(a)
a = 5
console.log(a)
a = 6
console.log(a)
a = 564
console.log(a)

// ES6
const b = 6
// Error b = 23

if (true) {
    const c = 7
    console.log(b) // 6
    console.log(c) // 7
}

console.log(b) // 6
//console.log(c) // error

///////////////////

const datos = [10, 22, 36]
const persona = {nombre: 'Pepe', edad: 22}

datos[datos.length] = 63
datos.push(43)

// datos = 3 error
// datos = []
// datos = [10, 22, 36, 63, 43]

persona.altura = 178
persona.edad = 23
persona.nombre = ''
delete persona.nombre 
persona.nombre = ''

// persona = 178
// persona = []
// const persona = {nombre: 'Pepe', edad: 22}

console.log(datos)
console.log(persona)



