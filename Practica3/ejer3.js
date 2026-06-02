function simularPeticionAPI(){
    return new Promise((resolve =>{
        setTimeout(()=>[
            resolve("datos recividos correctamente")
        ], 5000)
    }))
}

async function obtenerDatos(){
    console.log("cargando datos....")
    const resultado = await simularPeticionAPI()
    console.log(resultado)
}
obtenerDatos()

// resultados
// node ejer3.js                                                                                          1 ↵ ──(mar,jun02)─┘
// cargando datos....
// datos recividos correctamente