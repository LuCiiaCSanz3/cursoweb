
const f = require('../02_multiplos.js')

describe('Funcion isMultiplo', () => {
    it('should be true that 20 is multiple of 2)', () => {
        expect(f.isMultiplo(20, 2)).toBeTruthy()
    });
    it('should be false that 21 is multiple of 2)', () => {
        expect(f.isMultiplo(21, 2)).toBeFalsy()
    });
    it('should be error that "pepe" is multiple of 2)', () => {
        expect( () => f.isMultiplo('pepe', 2) ).toThrow()
    });
});

describe('Funcion extraerMultiplos', () => {
    it('should be retur an array', () => {
        expect( Array.isArray(f.extraerMultiplos())).toBeTruthy()
    });
    it('should be retur an array ...', () => {
        const aDatos = [1,2,3,4,5,6,7,8,9]
        const n = 2
        expect(f.extraerMultiplos(n, aDatos)).toEqual([2,4,6,8])
    });
    it('should be retur an array ...', () => {
        const aDatos = [1,2,3,4,5,6,7,8,9]
        const n = 3
        expect(f.extraerMultiplos(n, aDatos)).toEqual([3,6,9])
    });
});

/*
// espectativas
console.log('isMultiplo(2,20) debe dar true')
// prueba
console.log(isMultiplo(2,20))
// espectativas
console.log('isMultiplo(2,21) debe dar false')
// prueba
console.log(isMultiplo(2,21))
*/