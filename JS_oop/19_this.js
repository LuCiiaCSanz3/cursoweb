// 4 formas de ejecutar un funcion
// patrones de invocación
// cambian el significado de this

function algo () {
    console.log(this.nombre)
}

// Funcion

algo() // this es process o window

// Método
const o = { nombre:'Pepe', edad: 23}
o.algo = algo

o.algo

// Constructora

const nuevo = new algo()

// Indirectamente (apply o call)

const otro = {
    tipo: 'perro',
    nombre: 'Rufo'
}

// algo.call()
algo.apply(otro)

console.log('----------------------------------')

const persona = {nombre:'Pepe'}
persona.saludar = function() {
    console.log(`Hola soy ${this.nombre}`)
}
persona.saludar()
//setTimeout(persona.saludar, 1000)
//setTimeout(persona.saludar.bind(persona), 2000)

console.log('-------------------------------------')

// en las funciones arrow this es consistemente:
//SIEMPRE es la propia funcion

persona.saludarArrow = () => {
    console.log(`Hola soy ${this.nombre}`)
}

persona.saludarArrow()

algoArrow =  () => {
    console.log(this)
}

algoArrow()