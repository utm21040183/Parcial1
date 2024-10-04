import { ModeloAlumnosReprobados } from "../Models/alumnos.model.js"

ModeloAlumnosReprobados.create({
    nombre:"Andrea",
    apepat:"Hernandez",
    apemat:"Garza",
    edad:24,
    carrera:"TICS"
},{
nombre:"Juanito",
apepat:"Perez",
apemat: "Jimenez",
edad: 16,
carrera: "RHH",
},
{
nombre:"Eduardo",
apepat:"Lara",
apemat: "Beltran",
edad: 21,
carrera: "TICS",

},
{
nombre:"Salma",
apepat:"tapia",
apemat: "Padilla",
edad: 20,
carrera: "TICS",

},
{

nombre:"Mayo",
apepat:"zambada",
apemat: "Escutia",
edad: 40,
carrera: "TICS",})

export const test = () =>{
    console.log("se está mandando a llamar correctamente el controlador :)")
}