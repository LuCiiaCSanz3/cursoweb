
/**
 * @description recibe un objeto a tantos niveles como contenga
 *              y crea un string con la información
 * @param {object} obj
 * @returns {string}
 * 
 */

function objectToString(obj = {}) {
    let cadena = ``
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if ( typeof value == 'object'&& !Array.isArray(value)) 
            {
                cadena += `
                ${key}: ${objectToString(value)}`
            } else {
                if (!isNaN(key)) {
                    key++
                }
                cadena += `
                ${key}: ${value}`    
            }
        }
    }
    return `${cadena}
    `
}

let p2 = {
    nombre: 'rosa',
    edad: 35,
    isAlumno: true
}

let cadena = objectToString(p2)
console.log(cadena)

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

cadena = objectToString(p1)
console.log(cadena)

for (const key in p1) {
    const 
}