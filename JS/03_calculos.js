
function isValidNumber(p) {
    let r = true
    if(typeof p == 'boolean' ||
    typeof p == 'object' ||
    p == NaN ||
    isNaN(p) 
     ) {
         r = false
     }
     return r
}

/** función suma
 * @description recibe dos parámetros y devuelve la suma de ambos
 * @param (number)
 * @param (number)
 * @returns (number)
 * 
 */

function suma(a = 0, b = 0) {

    if(! isValidNumber(a) 
        ! isValidNumber(a) )  {
            throw new error('parametos incorrectos')
        }
    return +a + +b
}

/** función restar
 * @description recibe dos parámetros y devuelve la resta de ambos
 * @param (number) a
 * @param (number) b
 * @returns (number) c
 * 
 */
function restar(a = 13, b = 4) {
    let c = a - b
    return c
}

/** función multiplicar
 * @param (number) a
 * @param(number) b
 * @returns (number)
 * 
 */
function multiplicar(a = 0, b = 1) {
    return a * b
}

/** función dividir
 * @param (number) a
 * @param(number) b
 * @returns (number)
 * 
 */
function dividir(a = 0, b = 1) {
    return a / b
}

/** función mostrar
 * @description recibe dos parámetros y devuelve la resta de ambos
 * @param (string , number)
 * @returns (void)
 * 
 */
function mostrar(cadena = '') {
    console.log(cadena)
}

module.exports = {}
module.exports.suma = suma
module.exports.restar = restar
module.exports.multiplicar = multiplicar
module.exports.dividir = dividir

