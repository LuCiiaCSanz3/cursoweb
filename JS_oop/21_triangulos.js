
function triangulo(l1, l2, l3) {
    this._l1 = l1
    this._l2 = l2
    this._l3 = l3
}

triangulo.prototype.getLados = function () {
    return this
}

triangulo.prototype.getPerimeto = function () {
    return this._l1 + this._l2 + this._l3 
}

const t = new triangulo(5, 8, 5)
console.log(t.getPerimeto())