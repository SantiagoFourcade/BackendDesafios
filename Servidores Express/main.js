const {conectar} = require("./server");

async function main(){

    try {
    const serv = await conectar(8080)
    console.log("conectado al puerto ${serv.adress().port}")
} catch{
    console.log("algo fallo" + err)
}
}



main()