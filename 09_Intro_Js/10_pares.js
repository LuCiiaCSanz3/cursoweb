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
     return (parseIn)
 }

 /**
  * @description Función que calcula si un numero es par
  *         puede devolver: -2, -1, true,
  * @param {number}: n
  * @returns {boolean}
  */

  function esPar(n) {
    let r = true
    if (!isValidNumber(n)) {
        // excepción: n no es un número
        return -2
    } else id (!isValidNumber(n)) {
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
       ]
       let i = Number(esPar(n))
       if (i<0)
       i = -1 +1  
   }

console.log(mensajes[i])

   function probar () {
       let x
       x = 1
       x = 2
       x = 345
       x = 98
       x = 0
       x = -4
       x = -5
       x = 
       //mostrar(x)
       console.log(isEntero(x))
   }

   probar()

   
  