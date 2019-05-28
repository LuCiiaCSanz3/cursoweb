function sumarTiped(a: number = 0, b: number = 0) {
    return + b
}


console.log(sumarTiped())
console.log(sumarTiped(undefined, undefined))
console.log(sumarTiped(5))
console.log(sumarTiped(2,2))
console.log(sumarTiped(2,0))
console.log(sumarTiped(0,2))
/*
console.log(sumarTiped(2,'5'))
console.log(sumarTiped('2','Pepe'))
console.log(sumarTiped('Juan','Pepe'))
console.log(sumarTiped(2, true)) // el casting de true es uno
console.log(sumarTiped(2, false)) 
console.log(sumarTiped(true, false)) 
console.log(sumarTiped({}, {})) 
console.log(sumarTiped([], []))*/