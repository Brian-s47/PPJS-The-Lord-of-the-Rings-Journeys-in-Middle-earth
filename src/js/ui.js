// HTML descripcion del juego "Home"
export const descripcionHome = `
        <section class="section__descripcion"> <!-- Informacion Juego -->
            <div class="div__tituloDescripcion">
                <h2>Descripción general</h2>
            </div>
            <div class="div_parrafo">
                <p>
                    El Señor de los Anillos: Viajes por la Tierra Media es un juego cooperativo
                    para entre 1 y 5 jugadores. En el transcurso de cada partida, un grupo
                    de héroes se embarcará en arriesgadas aventuras, colaborando para
                    explorar el vasto y épico mundo de fantasía creado por J.R.R. Tolkien,
                    El Señor de los Anillos, y sobrevivir a sus peligros. A lo largo de sus viajes,
                    los protagonistas combatirán contra poderosos adversarios, descubrirán
                    tesoros perdidos y saber olvidado, y personalizarán sus habilidades de
                    forma acorde a la función que desempeñan en su comunidad. Algo
                    siniestro está resurgiendo, uniendo todo lo que es diabólico, sombrío y
                    corrupto, y es hora de que los héroes desafíen a este mal y comiencen
                    sus Viajes por la Tierra Media.
                </p>
            </div>
            <div class="div_image">
                <img src="../src/assets/img/Juego Base.png">
            </div>
        </section>
        <section class="section_campaña"> <!-- Informacion Campaña -->
            <div class="div__tituloDescripcion">
                <h2>Una campaña épica</h2>
            </div>
            <div class="div_parrafo">
                <p>
                    Cada partida de El Señor de los Anillos: Viajes por la Tierra Media es
                    una aventura dentro de una gran campaña, durante la cual los Héroes
                    intentan completar una serie de objetivos antes de verse superados por
                    las fuerzas del mal que plagan la Tierra Media. Sea cual sea el resultado
                    de una aventura en particular, los Héroes y la campaña avanzan. Finalmente,
                    tras completar diversas aventuras, la campaña llegará a una
                    dramática conclusión con el triunfo o el fracaso del grupo de Héroes.
                </p>
            </div>
            <div class="div_image">
                <img src="../src/assets/img/Juego Campaña.png">
            </div>
        </section>
`;
// HTML Menu de navegacion lateral "ON"
export const navmenuHeroes = `
<!-- Menu Lateral de navegacion -->
<nav class="nav__menuHeroes">
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
        </ul>
    </div>
</nav>
`;
// HTML Formulario de Inicio de Sesion
export const formularioInisioSesion = `
    <h2>Iniciar Sesión</h2>
    <form>
      <input type="text" id="usuario" placeholder="Usuario" required>
      <input type="password" id="contrasena" placeholder="Contraseña" required>
      <button id="botonIniciarsesion" type="submit">Entrar</button>
    </form>
    <div class="div__resgistrar">
      ¿No tienes cuenta? <a id="crearPerfil" href="#">Crear cuenta</a>
    </div>
`
// HTML Formulario de Inicio de Sesion
export const formularioCreacionUsuario = `
        <h2>Creacion de Perfil</h2>
        <form>
          <input type="text" id="nombre" placeholder="Nombre" required>
          <input type="email" id="correo" placeholder="correo" required>
          <input type="text" id="usuario" placeholder="usuario" required>
          <input type="text" id="contraseña" placeholder="contraseña" required>
          <button id="botonregistrar" type="submit">Registrar</button>
        </form>
        <div class="div__resgistrar">
          ¿Ya tienes una cuenta? <a id="iniciarSesion" href="#">Iniciar Sesion</a>
        </div>
`
// HTML tabla heroes
export const tablaheroes = `
<table class="tabla-heroes">
    <thead class="thead-heroes">
        <tr>
            <th>Nombre</th>
            <th>Raza</th>
            <th>Vigor</th>
            <th>Sabiduria</th>
            <th>Agilidad</th>
            <th>Brio</th>
            <th>Astucia</th>
            <th>Miedo-Max</th>
            <th>Daño-Max</th>
            <th>Inspiracion-Max</th>
        </tr>
    </thead>
    <tbody class="tbody-heroes">
        <tr>
            <td>Aragorn</td>
            <td>Humano</td>
            <td>3</td>
            <td>4</td>
            <td>2</td>
            <td>2</td>
            <td>3</td>
            <td>5</td>
            <td>5</td>
            <td>4</td>
        </tr>
        <tr>
            <td>Arwen</td>
            <td>Elfo</td>
            <td>2</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>6</td>
            <td>4</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Balin</td>
            <td>Enano</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>4</td>
            <td>2</td>
            <td>4</td>
            <td>6</td>
            <td>4</td>
        </tr>
        <tr>
            <td>Beravor</td>
            <td>Humano</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>5</td>
            <td>5</td>
            <td>4</td>
        </tr>
        <tr>
            <td>Bilbo</td>
            <td>Hobbit</td>
            <td>2</td>
            <td>2</td>
            <td>3</td>
            <td>3</td>
            <td>4</td>
            <td>7</td>
            <td>3</td>
            <td>6</td>
        </tr>
        <tr>
            <td>Dis</td>
            <td>Enano</td>
            <td>4</td>
            <td>2</td>
            <td>2</td>
            <td>3</td>
            <td>3</td>
            <td>5</td>
            <td>5</td>
            <td>3</td>
        </tr>
        <tr>
            <td>Elanor</td>
            <td>Humano</td>
            <td>3</td>
            <td>2</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>5</td>
            <td>5</td>
            <td>4</td>
        </tr>
        <tr>
            <td>Elena</td>
            <td>Elfo</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>4</td>
            <td>3</td>
            <td>6</td>
            <td>4</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Gandalf</td>
            <td>Isari</td>
            <td>2</td>
            <td>4</td>
            <td>2</td>
            <td>4</td>
            <td>2</td>
            <td>6</td>
            <td>6</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Gimli</td>
            <td>Enano</td>
            <td>4</td>
            <td>2</td>
            <td>2</td>
            <td>4</td>
            <td>2</td>
            <td>4</td>
            <td>6</td>
            <td>3</td>
        </tr>
        <tr>
            <td>Legolas</td>
            <td>Elfo</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>2</td>
            <td>3</td>
            <td>6</td>
            <td>4</td>
            <td>5</td>
            </tr>
    </tbody>
</table>
`;
