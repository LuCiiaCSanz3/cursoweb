var dado = {
    _valor: null,
    lanzar: function () {
        this._valor = Math.trunc(Math.random() * 6) + 1;
        console.log(this._valor);
    }
};
for (var i = 0; i < 20; i++) {
    dado.lanzar();
    console.log(dado._valor);
}
/*
function Dado() {
    let _valor = null
    this.lanzar = function() {
        _valor = parseInt(Math.random()*6) + 1
        console.log(_valor)
    }
}

const dado = new Dado()

for (let i = 0; i < 20; i++) {
    dado.lanzar()
    // dado._valor = 6
    console.log(dado._valor)
}*/
var persona = {
    nombre: 'Pepe',
    apellido: 'Perez',
    edad: 23,
    _curso: '',
    get curso() { return this._curso; },
    set curso(curso) { this._curso = curso; },
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
};
persona.curso = 'Angular';
persona._curso = 'JS';
console.log(persona.curso);
console.log(persona.nombreCompleto);
