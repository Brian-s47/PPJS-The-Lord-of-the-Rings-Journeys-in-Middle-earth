// Zona de importacion de Modulos
import{find, search} from "./api.js";
import{navmenuHeroes, descripcionHome, formularioInisioSesion, formularioCreacionUsuario} from "./ui.js";

// Zona de variables
const campos = ['nombre', 'correo', 'usuario', 'contraseña'];

// Zona de selectores
// Selector de main
const Main = document.querySelector("main");
// Selectores del menu superior
const irHome = document.getElementById("ir__home");
const irHeroes = document.getElementById("ir__Heroes");
const irPerfil = document.getElementById("ir__Perfil")

// Zona de Eventos de escucha

// Evento de click Home Menu superior "header"
irHome.addEventListener("click", function(event){
    event.preventDefault();
    Main.style.flexDirection = '';
    Main.style.alignItems = ``;
    Main.style.marginTop = ``;
    Main.style.marginBottom = ``;
    Main.style.gap = ""
    Main.innerHTML = descripcionHome;
    }
);
// Evento de click Heroes Menu superior "header"
irHeroes.addEventListener("click", async function(event){
    event.preventDefault();
    Main.innerHTML = `${navmenuHeroes}`;

    // //Modificacion de CSS
    Main.style.flexDirection = 'row';

    const datos = await find();
    // Contenedor tabla
    const contenedorTabla = document.createElement("div");
    contenedorTabla.classList.add("div__contenedorTabla");
    // Titulo de tabla
    const tituloTabla = document.createElement("h1");
    tituloTabla.textContent = "Lista De Heroes"
    tituloTabla.classList.add("tituloTabla");
    // Agregar titulo al contenedor de tabla
    contenedorTabla.appendChild(tituloTabla)
    // Agregar contenedor de tabla al main
    Main.appendChild(contenedorTabla)

    const tabla = document.createElement("table");
    tabla.classList.add("tabla-heroes");
    const thead = document.createElement("thead");
    thead.classList.add("thead-heroes");
    const tbody = document.createElement("tbody");
    tbody.classList.add("tbody-heroes");

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
    contenedorTabla.appendChild(tabla)

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
    }      
);
// Evento de click Perfil Menu superior "header"
irPerfil.addEventListener("click", async function (event){
    event.preventDefault();
    Main.innerHTML = ``;

    //Modificacion de CSS
    Main.style.flexDirection = 'row';
    Main.style.alignItems = `center`;
    Main.style.marginTop = `20%`;
    Main.style.marginBottom = `100%`;
    const datos = await find();

    // Creacion de contenedor de inicio de sesion
    const contenedorInicioSesion = document.createElement("div");
    contenedorInicioSesion.classList.add("div__inicioSesion");

    contenedorInicioSesion.innerHTML = `
    ${formularioInisioSesion}
  `;

    Main.appendChild(contenedorInicioSesion);
})
// Evento de click en menu lateral y carga de informacion en main
document.addEventListener("click", async function(event) {
    if (event.target.closest(".ul__listaHeroes li")) {
        event.preventDefault();

        const nombreHeroe = event.target.textContent;
        const datos = await search(nombreHeroe);

        //Modificacion de CSS
        Main.style.gap = "12px"

        Main.innerHTML = `
        ${navmenuHeroes}
        <section class="section__infoHeroe">
            <!-- Seccion para ingresar el HTML del heroe al que se le de click en evento de lista de navegacion lateral -->
        </section>
        `;

        const sectioninfoHeroe = document.querySelector(".section__infoHeroe");
        sectioninfoHeroe.innerHTML = `
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
                            <p>Habilidad Innata: ${datos.habilidad}</p>
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
                                <li><strong>Vigor: ${datos.estadisticas.vigor}</strong></li>
                                <li><strong>Sabiduría: ${datos.estadisticas.sabiduria}</strong></li>
                                <li><strong>Agilidad: ${datos.estadisticas.agilidad}</strong></li>
                                <li><strong>Brío: ${datos.estadisticas.brio}</strong></li>
                                <li><strong>Astucia: ${datos.estadisticas.astucia}</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
});
// Evento de escucha de Formulario creacion de perfil
document.addEventListener("click", async function(event){
    if(event.target.closest("#crearPerfil")){
        event.preventDefault();
        Main.innerHTML = ``;

        //Modificacion de CSS
        Main.style.flexDirection = 'row';
        Main.style.alignItems = `center`;
        Main.style.marginTop = `10%`;
        Main.style.marginBottom = `100%`;

    // Creacion de contenedor de creacion de usuario
    const contenedorCreacionUsuario = document.createElement("div");
    contenedorCreacionUsuario.classList.add("div__creacionUsuario");

    contenedorCreacionUsuario.innerHTML = `
    ${formularioCreacionUsuario}
  `;

    Main.appendChild(contenedorCreacionUsuario);

    // Cargar datos del local storage en formulario
    campos.forEach(id => {
        const valorGuardado = localStorage.getItem(id);       
        if (valorGuardado) {
            document.getElementById(id).value = valorGuardado;
        }
    });

    // Para guardar los datos en el local storage cada que el usuario los escriba
    campos.forEach(id => {
        const input = document.getElementById(id);
        input.addEventListener('input', () => {
          localStorage.setItem(id, input.value);
        });
      });
    }
});
// Evento de escucha de submit de formulario para registrar en API
document.addEventListener("click", async function (event){
    if(event.target.closest("#botonregistrar")){
        event.preventDefault();
        // Traer el contenido del formulario      
        const nuevoUsuario = `
            {
            "nombre": ${document.getElementById("nombre").value},
            "Correo": ${document.getElementById("correo").value},
            "usuario": ${document.getElementById("usuario").value},
            "contraseña": ${document.getElementById("contraseña").value},
            "favoritos": {
                "heroes": [],
                "cometidos": [],
                "armas": [],
                "armaduras": []
                }
            }
        `
    }
})


