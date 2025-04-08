// Zona de importacion de Modulos
import{find, search} from "./api.js";
import { cargarDatosHeroe } from "./ui.js";

// Zona de selectores
const listaMenu = document.querySelector(".ul__listaHeroes");
const sectioninfoHeroe = document.querySelector(".section__infoHeroe");
const navmenuHeroes = document.querySelector(".nav__menuHeroes");
const iconmenuHeroeOn = document.getElementById("#iconoMenu");

// Evento de escucha de click 

// export const ClickHeroe = document.getElementsByClassNameall("ul__listaHeroes");
// ClickHeroe.onclick = async function(event){
//     event.preventDefault();
//     const datosHeroe = await search(event.srcElement.innerText)
//     console.log(event, datosHeroe);
// }

// Zona de Eventos de escucha

// Evento de click en menu lateral y carga de informacion en main
listaMenu.addEventListener("click", async function(event){
    event.preventDefault();
    const nombreHeroe = event.target.textContent;
    const datos = await search(nombreHeroe);
    const infoHeroe = `
    <div class="div__inforheroe">
                    <h1>${datos.nombre}</h1>
                    <div class="div__historia">
                        <p>${datos.historia}</p>
                    </div>
                    <div class="div__tarjeta">
                        <img id="img__heroe" src="${datos.tarjetas.general}">
                        <img id="img__historia" src="${datos.tarjetas.historia}">
                    </div>
                    <div class="div__caracteristicas">
                        <h1>Caracteristicas</h1>
                        <div class="div__estadisticas">
                            <div class="div__carInatas">
                                <p>Habilidad Innata: ${datos.habilidad}<br></p>
                                <h3>Limites</h3>
                                <ul>
                                    <li>Miedo -> ${datos.soporte.miedo}</li>
                                    <li>Daño -> ${datos.soporte.daño}</li>
                                    <li>Inspiracion -> ${datos.soporte.inspiracion}</li>
                                </ul>
                            </div>
                            <div class="div__statsHeroe">
                                <h2>Estadísticas:</h2>
                                <ul>
                                  <li><strong>Vigor: ${datos.estadisticas.vigor}</li>
                                  <li><strong>Sabiduría: ${datos.estadisticas.sabiduria}</li>
                                  <li><strong>Agilidad: ${datos.estadisticas.agilidad}</li>
                                  <li><strong>Brío: ${datos.estadisticas.brio}</li>
                                  <li><strong>Astucia: ${datos.estadisticas.astucia}</li>
                                </ul>
                              </div>
                        </div>
                    </div>
                </div>
    `
    sectioninfoHeroe.innerHTML = infoHeroe
    }
);

// Evento de minimizar menu lateral
iconmenuHeroeOn.addEventListener("click", function(event){
    event.preventDefault();
    const menuLateralOn = `
                        <!-- Menu lista de heroes lateral -->
                <div class="div__subTitulo"> <!-- titulo de heroes e icono -->
                    <a href="#">Heroes</a>
                    <img id="iconoMenu" src="../src/assets/icon/espadas.png">
                </div>
                <div class="div__ListaHeroes">
                    <ul class="ul__listaHeroes"> <!-- Opciones de Menu superior -->
                        <li><a class="heroeMenuNav" href="#">Aragorn</a></li>
                        <li><a class="heroeMenuNav" href="#">Arwen</a></li>
                        <li><a class="heroeMenuNav" href="#">Balin</a></li>
                        <li><a class="heroeMenuNav" href="#">Beravor</a></li>
                        <li><a class="heroeMenuNav" href="#">Bilbo</a></li>
                        <li><a class="heroeMenuNav" href="#">Dis</a></li>
                        <li><a class="heroeMenuNav" href="#">Elanor</a></li>
                        <li><a class="heroeMenuNav" href="#">Elena</a></li>
                        <li><a class="heroeMenuNav" href="#">Gandalf</a></li>
                        <li><a class="heroeMenuNav" href="#">Gimli</a></li>
                        <li><a class="heroeMenuNav" href="#">Legolas</a></li>
                </div>
    `
    navmenuHeroes.innerHTML = menuLateralOn;
});
