// Zona de importacion de Modulos
import{find, search} from "./api.js";
import{navmenuHeroes, descripcionHome} from "./ui.js";


// Zona de selectores
const Main = document.querySelector(".main");
const irHome = document.getElementById("ir__home");
const irHeroes = document.getElementById("ir__Heroes");
const navmenuHeroes = document.querySelector(".nav__menuHeroes");
const iconmenuHeroeOn = document.getElementById("#iconoMenu");

// Zona de Eventos de escucha

// Evento de click Home Menu superior "header"
irHome.addEventListener("click", function(event){
    event.preventDefault();
    Main.innerHTML = descripcionHome;
    }
);

// Evento de click en menu lateral y carga de informacion en main
// listaMenu.addEventListener("click", async function(event){
//     event.preventDefault();
//     const nombreHeroe = event.target.textContent;
//     const datos = await search(nombreHeroe);
//     const infoHeroe = `
//     <div class="div__inforheroe">
//                     <h1>${datos.nombre}</h1>
//                     <div class="div__historia">
//                         <p>${datos.historia}</p>
//                     </div>
//                     <div class="div__tarjeta">
//                         <img id="img__heroe" src="${datos.tarjetas.general}">
//                         <img id="img__historia" src="${datos.tarjetas.historia}">
//                     </div>
//                     <div class="div__caracteristicas">
//                         <h1>Caracteristicas</h1>
//                         <div class="div__estadisticas">
//                             <div class="div__carInatas">
//                                 <p>Habilidad Innata: ${datos.habilidad}<br></p>
//                                 <h3>Limites</h3>
//                                 <ul>
//                                     <li>Miedo -> ${datos.soporte.miedo}</li>
//                                     <li>Daño -> ${datos.soporte.daño}</li>
//                                     <li>Inspiracion -> ${datos.soporte.inspiracion}</li>
//                                 </ul>
//                             </div>
//                             <div class="div__statsHeroe">
//                                 <h2>Estadísticas:</h2>
//                                 <ul>
//                                   <li><strong>Vigor: ${datos.estadisticas.vigor}</li>
//                                   <li><strong>Sabiduría: ${datos.estadisticas.sabiduria}</li>
//                                   <li><strong>Agilidad: ${datos.estadisticas.agilidad}</li>
//                                   <li><strong>Brío: ${datos.estadisticas.brio}</li>
//                                   <li><strong>Astucia: ${datos.estadisticas.astucia}</li>
//                                 </ul>
//                               </div>
//                         </div>
//                     </div>
//                 </div>
//     `
//     Main.innerHTML = infoHeroe;
//     }
// );

// Evento de click heroes Menu superior "header"
irHeroes.addEventListener("click", async function(event){
    event.preventDefault();
    Main.innerHTML = `
    ${navmenuHeroes}
    <h1 id="tituloTabla">Lista De Heroes</h1>
    `;
    const datos = await find();

    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Encabezado de tabla
    const trencabezado = document.createElement("tr")
    const encabezados = ["Nombre", "Raza", "Vigor", "Sabiduria", "Agilidad", "Brio", "Astucia", "Miedo-Max", "Daño-Max", "Inspiracion-Max"];
    encabezados.forEach((elemento)=>{
        const th = document.createElement("th");
        th.textContent = elemento;
        trencabezado.appendChild(th)
    })
    thead.appendChild(trencabezado)
    tabla.appendChild(thead)
    tabla.appendChild(tbody)
    Main.appendChild(tabla)

    datos[0].contenido.forEach(heroe => {
        const fila = document.createElement("tr");
        
        const Nombre = document.createElement("td");
        Nombre.textContent = heroe.nombre;

        const Raza = document.createElement("td");
        Raza.textContent = heroe.raza;

        const Vigor = document.createElement("td");
        Vigor.textContent = heroe.estadisticas.vigor;

        const Sabiduria = document.createElement("td");
        Sabiduria.textContent = heroe.estadisticas.sabiduria;

        const Agilidad = document.createElement("td");
        Agilidad.textContent = heroe.estadisticas.agilidad;

        const Brio = document.createElement("td");
        Brio.textContent = heroe.estadisticas.brio;

        const Astucia = document.createElement("td");
        Astucia.textContent = heroe.estadisticas.astucia;

        const MiedoMax = document.createElement("td");
        MiedoMax.textContent = heroe.soporte.miedo;

        const DañoMax = document.createElement("td");
        DañoMax.textContent = heroe.soporte.daño;

        const InspiracionMax = document.createElement("td");
        InspiracionMax.textContent = heroe.soporte.inspiracion;

        fila.appendChild(Nombre);
        fila.appendChild(Raza);
        fila.appendChild(Vigor);
        fila.appendChild(Sabiduria);
        fila.appendChild(Agilidad);
        fila.appendChild(Brio);
        fila.appendChild(Astucia);
        fila.appendChild(MiedoMax);
        fila.appendChild(DañoMax);
        fila.appendChild(InspiracionMax);
        
        tbody.appendChild(fila)
    })
})

// Evento de minimizar menu lateral
// iconmenuHeroeOn.addEventListener("click", function(event){
//     event.preventDefault();
//     const menuLateralOn = `
//                         <!-- Menu lista de heroes lateral -->
//                 <div class="div__subTitulo"> <!-- titulo de heroes e icono -->
//                     <a href="#">Heroes</a>
//                     <img id="iconoMenu" src="../src/assets/icon/espadas.png">
//                 </div>
//                 <div class="div__ListaHeroes">
//                     <ul class="ul__listaHeroes"> <!-- Opciones de Menu superior -->
//                         <li><a class="heroeMenuNav" href="#">Aragorn</a></li>
//                         <li><a class="heroeMenuNav" href="#">Arwen</a></li>
//                         <li><a class="heroeMenuNav" href="#">Balin</a></li>
//                         <li><a class="heroeMenuNav" href="#">Beravor</a></li>
//                         <li><a class="heroeMenuNav" href="#">Bilbo</a></li>
//                         <li><a class="heroeMenuNav" href="#">Dis</a></li>
//                         <li><a class="heroeMenuNav" href="#">Elanor</a></li>
//                         <li><a class="heroeMenuNav" href="#">Elena</a></li>
//                         <li><a class="heroeMenuNav" href="#">Gandalf</a></li>
//                         <li><a class="heroeMenuNav" href="#">Gimli</a></li>
//                         <li><a class="heroeMenuNav" href="#">Legolas</a></li>
//                 </div>
//     `
//     navmenuHeroes.innerHTML = menuLateralOn;
// });
