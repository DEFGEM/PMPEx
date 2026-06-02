const persona ={
    nombre: "cristopher",
    edad: 20,
    direccion:{
        ciudad: "QRO",
        pais: "MX"
    }
}
// destruction 
const{nombre, edad, direccion:{ciudad, pais}} = persona;
console.log("primera practica destruction")
console.log(`me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}, en el pais de ${pais}`)

// resultado
// └─(00:38:55 on main ✹)──> node eje1.js                                                                                               ──(mar,jun02)─┘
// primera practica destruction
// me llamo cristopher, tengo 20 años y vivo en QRO, en el pais de MX