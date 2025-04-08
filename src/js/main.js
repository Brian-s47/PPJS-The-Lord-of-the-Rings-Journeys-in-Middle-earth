// Zona de importacion de Modulos
import{find, search} from "./api.js";

//Prueba de cargar datos
const data = await find();
console.log(data);

//Prueba para buscar y traer datos de un heroe
// let nombre = "Beravor";
// const dataHeroe = await search(nombre);
// console.log(dataHeroe);

// Evento de escucha de click 
const ClickHeroe = document.getElementsByClassNameall("ul__listaHeroes");
// ClickHeroe.addEventListener("click", cargarDatosHeroe);
ClickHeroe.onclick = async function(event){
    const datosHeroe = await search(event.srcElement.innerText)
    console.log(event, datosHeroe);
}