// Zona de importacion de Modulos
import{find, search, cargarDatosHeroe} from "./api.js";

//Cargar datos
const data = await find();
console.log(data);

// Evento de escucha de click 
const ClickHeroe = document.getElementById("button_Heroe");
// ClickHeroe.addEventListener("click", cargarDatosHeroe);
ClickHeroe.onclick = function(event){
    console.log(event);
}

