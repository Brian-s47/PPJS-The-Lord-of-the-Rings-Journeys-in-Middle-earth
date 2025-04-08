// Zona de importacion de Modulos
import{find, search} from "./api.js";

// Zona de selectores
const sectionInfoHeroe = document.getElementsByClassName(".section__infoHeroe");

// Evento para cagar datos de heroe
export function cargarDatosHeroe(datos){
    sectionInfoHeroe.innerHTML = datos;
}