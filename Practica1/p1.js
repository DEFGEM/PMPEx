// codigo incorrecto
// o almenos no con lo que se pide
var nombre ="Armando"
var edad =25
nombre ="ana Maria"

var saludo ="hola, " + nombre + " tienes " + edad + " años"

console.log(saludo)

//  node p1.js                                                                                                     ──(lun,jun01)─┘
// hola, ana Maria tienes 25 años


// codigo correto 
const nombre1 ="Armando"  //porque const no se puede cambiar
let edad1 =25             //porque let si se puede cambiar usando la logica de la edad se cambia cada año 
//nombre1 ="ana Maria"   // aqui no se puede cambiar porque es const y no daria errro 

let saludo1 ="hola, " + nombre1 + " tienes " + edad1 + " años"

console.log(saludo1)
console.log("\n")

// resultado:
//  node p1.js                                                                                                 1 ↵ ──(lun,jun01)─┘
// hola, ana Maria tienes 25 años
// hola, Armando tienes 25 años




// ===================================================

//  convertir arrow function

// fucnion tradiocnal
// function cuadrado(numero) {
//     return numero * numero;
// }

const cuadrado = numero => numero * numero

console.log("cuadrado de 5 es:" +cuadrado(5 ))
console.log("cuadrado de 8 es:" +cuadrado(8 ))
console.log("cuadrado de 3 es:" +cuadrado(3 ))
console.log("\n")

// resultado:
// cuadrado de 5 es:25
// cuadrado de 8 es:64
// cuadrado de 3 es:9



// ===================================================

// crear saludo personzalizado

const saludoPersonalizado = (nombre3, edad3) => {
    return `hola me llamo ${nombre3} y tengo ${edad3} años`
}

console.log(saludoPersonalizado("Cristoher", 20))
console.log("\n")



// vercion corta mantenideo las misma funcion
const saludoPersonalizado1 = (nombre5, edad5) => `Hola, me llamo ${nombre5} y tengo ${edad5} años.`;
console.log(saludoPersonalizado1("CRISTOPHER", 20))
console.log("\n")



// resulatado funal de la ejecuacion 
// └─(00:00:30 on main ✹ ✭)──> node p1.js                                                                                                     ──(mar,jun02)─┘
// hola, ana Maria tienes 25 años
// hola, Armando tienes 25 años


// cuadrado de 5 es:25
// cuadrado de 8 es:64
// cuadrado de 3 es:9


// hola me llamo Cristoher y tengo 20 años


// Hola, me llamo CRISTOPHER y tengo 20 años.