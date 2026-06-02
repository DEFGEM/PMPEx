// datos para filtar > a 1000
const productos =[
    {nombre: "laptop", precio: 1200},
    {nombre: "mause", precio: 250},
    {nombre: " teclado", precio: 750},
    {nombre: "monitor", precio: 3000}
]

// paso 1 filtara 
const productosCaros = productos.filter(productos => productos.precio > 1000)
// paso 2 extraer los valores 
const nombres = productosCaros.map(productos => productos.nombre)

console.log(nombres) //["laptop", "monitor"]

// resultado
// └─(00:45:51 on main ✭)──> node eje2.js                                                                                           1 ↵ ──(mar,jun02)─┘
// [ 'laptop', 'monitor' ]