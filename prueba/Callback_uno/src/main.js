/*

function multiplicaPorSiMismo(valor, ejecuta) {
    console.log(`Inicia ejecución: el Valor es = ${valor}`)
    setTimeout(function() {
    ejecuta(valor, valor * valor);
    //ejecuta(2,2*2)
    }, 1000)
    }
   
    multiplicaPorSiMismo(2, function(valor, resultado) {
    console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`)
    })
    console.log('Procesando')

*/

const mipromesa = new Promise((resolve, reject) =>{
    console.log(`Inicia ejecución: el Valor es = ${valor}`)
    setTimeout(function() {
    resolve(valor, valor * valor);
    //ejecuta(2,2*2)
    }, 1000); 


})  

mipromesa.then(( valor,resultado)=>{
    console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`);

}).catch(()=>{
    console.log('Procesando');
    
})


