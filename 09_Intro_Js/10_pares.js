/**
 * JSDoc
 * @description Programa que calcula y muestra 
 *              si un numero es par o impar
 */

/**
 * @description función comprueba si una expresión
 *              es convertible a un número válido 
 *              rechazando arrays, booleans, null, 
 *              undefined, '' y string no numéricos
 * @param {any} n 
 * @returns {boolean}
 */
    function isValidNumber(n) {
    let r = true
    if (isNaN(n) || typeof n == 'boolean'
    || Array.isArray (n) || n === '' || n === null ) {
        r = false
    }
    return  r 
}

/**
 * 
 * @param {number} n 
 * @returns {boolean}
 */

 function isEntero(n = 0) {
     return (parseIn(n) === parseFloat(n))
 }

 /**
  * @description Función que calcula si un numero es par
  *         puede devolver: -2, -1, true,
  * @param {number}: n
  * @returns { number | boolean }
  */

  function esPar(n) {
        let r = true
        if (!isValidNumber(n)) {
            // excepción: n no es un número
            return -2
        } else id (!isValidNumber(n)) 
            // excepción: n no es entero
            return -1
        } else if (n%2) {
            r = false
        }
        return r 
        
  }


  /**
   * @description Función que muestra si un numero es par o impar
   * @param {number}: n
   * @returns (void)
   */

   function mostrar(n) {
       let mensajes = [
           `El número ${n} es impar`,
           `El número ${n} es par`
           `El número ${n} no es entero`
           `${n} no es un número`,
       ]
       let i = Number(esPar(n))
       if (i<0)
       i = -1 + 1  

console.log(mensajes[i])
}

module.exports = esPar
   
  