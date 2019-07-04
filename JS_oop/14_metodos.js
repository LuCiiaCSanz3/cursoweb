const o = {
    id: 123,
    nombre: 'pepe',
    edad: 34,
    conocidos: ['Juan', 'Raúl', 'Elena', 'Lola'],
    mostrarID: function (p) {
        console.log(this.id)
    },
    saludar : function (otro = 'amigo') {
        if (this._isConocido(otro)) {
            console.log(`Hola ${otro}, ¿como estás?`)
        } else {
            console.log(`Hola ${otro}, soy ${this.nombre}`)    
        }
    },
    isConocido: function (otro) {
        return this.conocidos.some( 
            item => item.toLowerCase() === otro.toLowerCase() )
    }
}
o.mostrarID()
o.saludar('Juan')
o.saludar()
o.saludar('Pepi')
console.log(o.isConocido('Julio'))