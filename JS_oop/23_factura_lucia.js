/*
Crear funcion constructora llamada factura
que deje crear objetos de ese tipo
utilizar siempre que puedas prototype
añadir el objeto cliente y array de objetos de elementos

*/
/*
const {fechaEsp, fijarLongitudCadena} = require('./15_helpers.js')

const templateFactura = {
    empresa: {
        nombre: '',
        direccion: '',
        telefono: '',
        nif: '',
    },
    cliente: {
        nombre: '',
        direccion: '',
        telefono: '',
        nif: '',
    },
    items : [
        {descripcion: '', precioU: 0, cantidad: 0} 
    ],
    numFactura: '',
    tipoIVA: '',
    formaPago: '',
    fecha: new Date()
    }

templateFactura.calcularImporte = function() {}
templateFactura.mostrarImporte = function() {}*/

function Direccion(calle, numero, ciudad, pais) {
    this.calle = calle
    this.numero = numero
    this.ciudad = ciudad
    this.pais = pais
}

function factura(empresa, cliente, items){
    this.empresa = empresa
    this.cliente = cliente
    this.items = items
    this.fecha = fecha
}

function empresa(nombre, direccion, telefono, nif) {
    this.nombre = nombre
    this.direccion = direccion 
    this.telefono = telefono
    this.nif = nif 
}

function cliente(nombre, direccion, telefono, nif) {
    this.nombre = nombre
    this.direccion = direccion 
    this.telefono = telefono
    this.nif = nif
}

function items(descripcion, precioU, cantidad) {
    this.descripcion = descripcion
    this.precioU = precioU 
    this.cantidad = cantidad
}


const empresa1 = new empresa('Bighit', 'c/ Bangtan', 625872321, 'T-3476179834',)
const cliente1 = new cliente('Army', 'c/ Fan de Bts', 625667881, 'T-34763454',)
const items1 = new items('Lighstick con la forma del mundo', 80, 100)

console.log(empresa)

empresa1.vender('Lighstick con la forma del mundo')





/*
factura.calcularImporte = function() {
    const importe = {} 
    importe.base = 
        this.items
        .map( libro => libro.precioU * libro.cantidad)
        .reduce( (total, item) => total + item ) 
    importe.iva = importe.base * this.tipoIVA
    importe.total = importe.base + importe.iva
    return importe
}

factura.listarItems = function() {
    let items = ``
    this.items.forEach(
        item => {
            let desc = fijarLongitudCadena(item.descripcion, 30)
            let pv = item.precioU
                .toLocaleString('es', {style: 'currency', currency: 'EUR'})
            let cant = item.cantidad
            items += 
`
    ${desc}     ${pv}          ${cant}
`
    })
    return items
}

factura.prepararFactura = function() {
    const importe = this.calcularImporte()
    const factura =
`
    _______________________________________________________________
                                        ${this.empresa.nombre}
                                        ${this.empresa.direccion}
                                        ${this.empresa.telefono}
                                        ${this.empresa.nif}
    Num. Factura: ${this.numFactura}
    ${this.cliente.nombre}
    ${this.cliente.direccion}
    ${this.cliente.telefono}
    ${this.cliente.nif}
    Descripción                         Precio      Cantidad
    _______________________________     _______     ________
    ${this.listarItems()}
    Importe ....................................${importe.base
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    IVA ........................................${importe.iva
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    Importe Total ..............................${importe.total
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    Forma de Pago ..............................${this.formaPago}
    Madrid, ${fechaEsp(this.fecha)}
    ______________________________________________________________
`
    return factura
}

factura.render = function () {
    console.log(this.prepararFactura())
}


factura.render()*/