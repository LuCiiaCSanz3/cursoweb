
function Direccion(calle, numero, ciudad, pais) {
    this.calle = calle
    this.numero = numero
    this.ciudad = ciudad
    this.pais = pais
}

function Persona(nombre, edad, direccion) {
    this.nombre = nombre
    this.edad = edad
    this.direccion = direccion // Asociación (atributos)
    this.mascota = []
}

Persona.prototype.adoptarMascota = function(mascota) {
    this.mascota.push(mascota) // Dependencia (metodo)
}

function Mascota (nombre, especie, color) {
    this.nombre = nombre
    this.especie = especie
    this.color = color
}

function Alumno(nombre, edad, direccion, cursos) {
    this.cursos = []
    Persona.prototype.constructor.call(this, nombre, edad, direccion)
}

Alumno.prototype = new Persona()
Alumno.prototype.constructor = Alumno


Alumno.prototype.inscribirse = function(cursos) {
    this.cursos.push()
}

//-----------------------------------------------------------------------

const a1 = new Alumno('PdNim', 44, 
        new Direccion('c/ Bangtan', 7, 'Seul', 'Corea del Sur'),
        'Páginas Web')
console.log(a1)

console.log(a1 instanceof Alumno)
console.log(a1 instanceof Persona)
console.log(a1 instanceof Object)

const Gato1 = new Mascota('V', 'sphynx', 'Canela')
const Gato2 = new Mascota('Suga', 'Siberiano', 'Blanco')

a1.inscribirse('Páginas Web')

a1.adoptarMascota(Gato2) // Inyeccion de dependencia
console.log(a1)

console.log(Gato2.nombre)
console.log(a1.mascota[0].nombre)