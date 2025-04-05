// Zona de importacion de Modulos
import{find, search} from "./api.js";

// Zona de ejecucion de codigo

//Prueba de cargar datos
const data = await find();
console.log(data);

//Prueba para buscar y traer datos de un heroe
let nombre = "Beravor";
const dataHeroe = await search(nombre);
console.log(dataHeroe);