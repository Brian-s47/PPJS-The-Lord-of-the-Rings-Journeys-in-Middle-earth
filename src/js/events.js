// Zona de importacion de Modulos
import{find, save, search, incioSesion} from "./api.js";
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
    Main.style.alignItems = ``;
    Main.style.marginTop = ``;
    Main.style.marginBottom = ``;
    Main.style.gap = ""
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

    Main.style.gap = ""

    Main.style.flexDirection = 'row';
    Main.style.alignItems = `center`;
    Main.style.marginTop = `20%`;
    Main.style.marginBottom = `100%`;
    const datos = await find();
    const usuarioActivo =  localStorage.getItem("usuarioActivo");
    if(usuarioActivo === "true"){

        // Zona para ingresar el cuadro con los datos de el perfil

    }else{

    // Creacion de contenedor de inicio de sesion
    const contenedorInicioSesion = document.createElement("div");
    contenedorInicioSesion.classList.add("div__inicioSesion");

    contenedorInicioSesion.innerHTML = `
    ${formularioInisioSesion}
  `;

    Main.appendChild(contenedorInicioSesion);
    }
})
// Evento de click en menu lateral y carga de informacion en main
document.addEventListener("click", async function(event) {
    if (event.target.closest(".ul__listaHeroes li")) {
        event.preventDefault();

        const nombreHeroe = event.target.textContent;
        const datos = await search(nombreHeroe);

        //Modificacion de CSS

        Main.style.flexDirection = `row`;
        Main.style.alignItems = ``;
        Main.style.marginTop = ``;
        Main.style.marginBottom = ``;

        Main.style.gap = "12px"

        Main.innerHTML = `
        ${navmenuHeroes}
        <section class="section__infoHeroe">
            <!-- Seccion para ingresar el HTML del heroe al que se le de click en evento de lista de navegacion lateral -->
        </section>
        `;

        const sectioninfoHeroe = document.querySelector(".section__infoHeroe");

        // Validacion de inicio de sesion: 
        const usuarioActivo =  localStorage.getItem("usuarioActivo");
        if(usuarioActivo === "true"){
            sectioninfoHeroe.innerHTML = `
            <div class="div__inforheroe">
                <div class="div__tituloLike">
                    <h1>${datos.nombre}</h1>
                    <img id="iconoLike" src="../src/assets/icon/Hoja.png" alt="Agregar a Favoritos">
                </div>
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
        } else{
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

    }
});
// Evento de click de Formulario creacion de perfil
document.addEventListener("click", async function(event){
    if(event.target.closest("#crearPerfil")){
        event.preventDefault();
        Main.innerHTML = ``;

        //Modificacion de CSS

        Main.style.gap = ""

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
// Evento de click de submit de formulario para registrar en API
document.addEventListener("click", async function (event) {
    if (event.target.closest("#botonregistrar")) {
      event.preventDefault();
  
      // Obtener valores del formulario
      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const usuario = document.getElementById("usuario").value;
      const contrasena = document.getElementById("contraseña").value;
  
      // Crear objeto JS válido
      const nuevoUsuario = {
        nombre: nombre,
        Correo: correo,
        usuario: usuario,
        contraseña: contrasena,
        favoritos: {
          heroes: [],
          cometidos: [],
          armas: [],
          armaduras: []
        }
      };
      // Guardar en la API
      await save(nuevoUsuario);
      alert(`El usuario ${nuevoUsuario.usuario} se registro correctamente`)
        // Limpiar localStorage
        campos.forEach(id => {
            localStorage.removeItem(id);
        });
        // Limpiar el formulario
        campos.forEach(id => {
            document.getElementById(id).value = "";
        });
    }
});
// Evento de click de Entrar para iniciar sesion 
document.addEventListener("click", async function (event){
    if (event.target.closest("#botonIniciarsesion")){
        event.preventDefault();

        // Obtener valores del formulario
        const usuario = document.getElementById("usuario").value;
        const contrasena = document.getElementById("contrasena").value;
        console.log(usuario, contrasena);
        
        //llamamos la funcion de inicio se sesion y capturamos la respuesta
        const validacioInicio = await incioSesion(usuario, contrasena);

        if (validacioInicio) {
            alert(`Inicio de sesion usuario: ${usuario} correcto`);
            console.log(validacioInicio);
            
            // Guardamos el estado actual de sesion en local storage
            localStorage.setItem("usuarioActivo", JSON.stringify(validacioInicio));
            localStorage.setItem("usuario", JSON.stringify(usuario));

            // Limpiar el formulario
            document.getElementById("usuario").value = "";
            document.getElementById("contrasena").value = "";

          } else {
            console.log(validacioInicio);
            alert("Usuario y/ó contraseña incorrectas");
          }
    }
});
// Evento de click en icono de like para agregar heroe a favoritos
document.activeElement("click", async function (event) {
    if (event.target.closest("#iconoLike")) {

        const nombreUsuarioActivo =  localStorage.getItem("usuario");
        
    }
});


