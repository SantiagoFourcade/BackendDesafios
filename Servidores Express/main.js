class Usuario {

    #nombre
    #apellido
    #mascota
    #libro

    constructor(nombre,apellido,mascota,libro) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.mascotas=[]
        this.libros=[]
    }

    obtenerNombre() {
        return this.#nombre
    }

    obtenerApellido () {
        return this.#apellido
    }

    obtenerNombreCompleto() {
        return this.#nombre + "" + this.#apellido
    }
    
    obtenerMascota () {
        return this.#mascota
    }

    agregarMascota () {
        return this.#mascota.push(mascota)
    }

    eliminarUltimaMascota () {
        return this.#mascota.pop(mascota)
    }

    obtenerLibros () {
        return this.#libro
    }

    agregarLibros () {
        return this.#libro.push(libro)
    }
}

const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");

const Usuarios = [{
    id: 1,
    Nombre: "Santiago",
    Apellido:"Fourcade",
    Mascota:"perro",
    Libros: 2,
},{
    id: 2,
    Nombre: "Natalia",
    Apellido:"Benzi",
    Mascota:"Gato",
    Libros:8,
},{
    id:3,
    Nombre:"Matias",
    Apellido:"Mazzoni",
    Mascota:"Gato",
    Libros:20,
}];


const getUsuarios = () => {
    return new promise ((resolve, reject) => {
        if (usuariosData.length === 0) {
            reject (new error("No existen datos"));
        }
        setTimeout (() => {
            resolve(Usuarios);
        }, 1500);
    });

const getUsuariosRandom = (Math.random()*Usuarios.length)
const rValue = Usuarios[getUsuariosRandom];

    async function usuariosData () {
        try {
            const dataUsuarios = await getUsuarios();
            console.log(dataUsuarios);
        } catch (error){
            console.log(error.message);
        }

        
    }

   async function usuarios() {
    await fs.promises.writeFile(ruta, JSON.stringify(usuarios))
    JSON.parse(await fs.promises.readFile(ruta, "utf-8"))
   }



}

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