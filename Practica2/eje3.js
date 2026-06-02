// practica 3 para buscar 
const personas =[
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 20}
]

// conf find en donde solo buscamos a luis
const luis =personas.find(personas => personas.nombre === "Luis");
console.log(luis)
console.log("\n")

// y en caso de que queramos buscar a maria
const maria =personas.find(personas => personas.nombre === "Maria");
console.log(maria)
console.log("\n")



// con FORECH imprimr nombre y edad que son los valores que tenemos de cada persona
personas.forEach(personas=>{
    console.log(`${personas.nombre} tiene ${personas.edad} años`);
})


// con reduce donde se hace una suma de valores en estq ecaso los años
const sumaEdades= personas.reduce((acumulador, personas)=>{
    return acumulador + personas.edad
}, 0)
console.log(sumaEdades)


// resultados
// └─(00:46:03 on main ✭)──> node eje3.js                                                                                               ──(mar,jun02)─┘
// { nombre: 'Luis', edad: 35 }


// { nombre: 'Maria', edad: 20 }


// Ana tiene 22 años
// Luis tiene 35 años
// Maria tiene 20 años
// 77