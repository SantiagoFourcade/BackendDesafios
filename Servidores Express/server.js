const express = require("express")

const server = express()

server.get("/bienvenida", (peticion, respuesta) => {
    respuesta.end("Hola!!")
})

server.get("/despedida", (peticion, respuesta) => {
    respuesta.end("Adios!!")
})

function conectar (puerto = 0) {
    return new Promise((resolve, reject) => {
        const serverConnect = server.listen(puerto, err => {
            if(err) reject(err)
            else resolve(serverConnect)
        })
    })
}

module.export = {conectar}