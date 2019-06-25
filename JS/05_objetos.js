// Si estamos en Java, C##, PHP ...
// Los objetos dependen de clases
// class persona {}
// p1 = new persona()
// p2 = new persona()

// En JS tenemos objetos literales
// basados en la notación JSON

let p1 = {
    nombre: 'pepe',
    edad: 33,
    direccion:{
        calle: 'c/ pez',
        numero: '24',
        ciudad: 'cádiz',
        pais: 'España'
    },
    aficiones : ['pintar', 'música', 'montañismo'],
    isAlumno: true
}

let p2 = {
    nombre: 'rosa',
    edad: 35,
    isAlumno: true
}

p1.altura = 179
p2.colorPelo = 'rubio'

console.log(p1)
console.log(p2)


console.log(p1.nombre)
console.log(p1.direccion.ciudad)
console.log(p1.aficiones[0])

let prop = 'edad'
p2[prop] = 'escritora'
console.log(p2[prop])

for (const key in p2) {
    const value = p2[key];
    console.log(`La propiedad ${key} vale ${value}`)   
}
console.log(".........................")

console.log('Mostrar ' + p1)

for (const key in p1) {
    const value = p1[key];
    console.log(`La propiedad ${key} vale ${value}`)   
}
