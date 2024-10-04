import { model, Schema } from "mongoose"


const EsquemaAlumnosReprobados = new Schema({
    nombre:{
        type:String
    },
    apepat:{
        type:String
    },
    apemat:{
        type:String
    },
    edad:{
        type:Number
    },
    carrera:{
        type:String
    }
})

export const ModeloAlumnosReprobados= new model("Tabla de alumnos reprobados", EsquemaAlumnosReprobados)