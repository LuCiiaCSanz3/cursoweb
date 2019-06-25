const f = require('../03_calculos.js')

fdescribe('funcion suma', () => {
    const aErrores = [
        "pepe", true, [], {}, NaN, null
    ]
    it('should be 5 with suma 2 + 3', () => {
        expect(f.suma(2,3)).toEqual(5);
    });
    it('should be 2 with suma 2', () => {
        expect(f.suma(2)).toEqual(2);
    });
    it('should be 0 with sumar without arguments', () => {
        expect(f.suma()).toEqual(0);
    });
    it('should be 5.4 with suma 2.1 + 3.3', () => {
        expect(f.suma(2.1, 3.3)).toEqual(5.4);
    });
    for (let i = 0; i < aErrores.length; i++) {
        const item = aErrores[i];
        it(`should be error with suma 2 + no numbers: ${item}`, () => {
            expect(() => f.suma(2,item)).toThrow()
    });        
    }
});