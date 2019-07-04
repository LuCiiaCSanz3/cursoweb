//array dias semana
//array meses

const aMeses = 
("Enero",
"Febrero",
"Marzo",
"Abril",
"Mayo",
"Junio",
"Julio",
"Agosto",
"Septiembre",
"Octubre",
"Noviembre",
"Diciembre")

const aDias = 
("Domingo",
"Lunes",
"Martes",
"Miércoles",
"Jueves",
"Viernes",
"Sábado")

const capitalize = (cadena = '') =>
       cadena[0].toUpperCase() + cadena.slice(1)

/** function fechaEsp()
 * @description Devuelve la fecha como 
 * "dia de la semana, dia de mes del año"
 * @param { date | string} fecha
 * @description el string debe respetar el estandar ISO
 * @returns { string }
 */

const fechaEsp = (fecha = new Date() ) => {
    if (typeof fecha === 'string') {
        fecha = new Date(fecha)
    }
    const nombreDia = capitalize(aDias[fecha.getDay()])
    const dia = fecha.getDate()
    const mes = capitalize(aMeses[fecha.getMonth()])
    const año = fecha.getFullYear()
    return `${nombreDia}, ${dia} de ${mes} del ${año}`
}

let f = new Date(1994,11,29)
f = '1994-11-29'
console.log(fechaEsp(f))