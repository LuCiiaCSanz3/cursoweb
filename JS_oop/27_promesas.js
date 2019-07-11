
function asincrona () {
    return new Promise( (resolve, reject) => {
        let i = Math.random()
        setTimeout ( () => {
            if(i < 0.7) { // ok
                resolve('¡¡ Exito !!' +i)
            } else { // error
                reject(new Error('Error número ' + i))
            }
        }, 2000 )
    })
}

for (let i = 0; i < 3; i++) {
asincrona()
.then( ( response ) => { console.log(response )}, )
.catch( ( error ) => { console.log( error.message )} )
}