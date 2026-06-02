function verificrUsuario(usuario){
    return new Promise((resolve, reject) => {
        if (usuario === "admin"){
            resolve("acceso concedido")
        }else{
            reject("acceso denegado")
        }
    })
}

// prueba 1 usuario con exito admin
console.log("ingresando al sistema...")
verificrUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.error(err))


// prueba 2 erro en no admin
verificrUsuario("cristopher")
    .then(res => console.log(res))
    .catch(err => console.error(err))
