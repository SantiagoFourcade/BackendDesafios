const express = require("express")

const server = express()

server.get("/bienvenida", (peticion, respuesta) => {
    respuesta.send("Hola!!")
})

server.get("/despedida", (peticion, respuesta) => {
    respuesta.send("Adios!!")
})

server.get("/productos", (peticion, respuesta) => {
    respuesta.send({Usuarios})
})

server.get("/productosRandom", (peticion, respuesta) => {
    respuesta.send()
})

function conectar (puerto = 0) {
    return new Promise((resolve, reject) => {
        const serverConnect = server.listen(puerto, () => {
           
        resolve(serverConnect)
        })
        serverConnect.on("error", error => reject(error))
    })
}

module.export = {conectar}