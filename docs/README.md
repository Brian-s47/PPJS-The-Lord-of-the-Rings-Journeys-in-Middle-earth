# Proyecto Progresivo JavaScript

Desarrollar una aplicación web funcional que consuma datos de una API (de libre elección), los almacene mediante mecanismos como Local Storage y presente una interfaz responsiva utilizando HTML, CSS y JavaScript.

## Requisitos del Proyecto

### 1. Selección de la API
- Investigar y seleccionar una API pública o con acceso gratuito.
- Implementar el consumo de datos de dicha API.

### 2. Almacenamiento Local
- Guardar información relevante en Local Storage.
- Permitir la recuperación y visualización de los datos almacenados.

### 3. Interfaz Responsiva
- Diseñar una UI atractiva y funcional.
- Asegurar la adaptabilidad a diferentes tamaños de pantalla (desktop y móvil).

### 4. Funcionalidad Dinámica
- Implementar interacciones con JavaScript (eventos, manipulación del DOM, etc.).
- Garantizar una navegación intuitiva y fluida.

### 5. Entrega
- Subir el código a un repositorio en GitHub.
- Documentar el proyecto en un README detallado con descripción, instrucciones de uso e información de la API utilizada.
- Entregar la URL del repositorio para evaluación.

## Criterios de Evaluación

- **Consumo correcto de la API (20%)**: Llamados eficientes, manejo de respuestas y errores.
- **Uso adecuado de Local Storage (20%)**: Almacenamiento, recuperación y eliminación de datos.
- **Diseño responsivo (20%)**: Correcta aplicación de CSS y adaptabilidad.
- **Interactividad y funcionalidad (20%)**: Fluidez en interacciones con JavaScript.
- **Documentación y estructura del código (20%)**: Claridad y organización en el repositorio.

## Entrega Final

- **Fecha límite:** 11 de abril a las 10 a.m.
- **Formato de entrega:** URL del repositorio en GitHub.

---

# Descripción del Proyecto

La **The Lord of the Rings: Journeys in Middle-earth - Web Companion** es una página web interactiva que permite acceder al contenido del juego de mesa **The Lord of the Rings: Journeys in Middle-earth**, haciendo uso de la plataforma **mockapi.io** para obtener datos del contenido del juego.

## Problemática

Actualmente, la única manera de acceder a la información del contenido del juego es de forma física, lo cual genera los siguientes inconvenientes:

1. **Pérdida de tiempo en partidas:** Dado que este es un juego presencial, al momento de reunirse se pierde tiempo al inicio mientras los jugadores ajustan sus personajes a la nueva aventura del día.
2. **Cantidad de contenido:** El juego está compuesto por una gran cantidad de cartas, lo cual dificulta el acceso de los jugadores a la información y la generación de estrategias o el camino que desean que su personaje siga.
3. **No acceso constante al contenido:** Como este juego se divide en campañas y estas, a su vez, en aventuras, es bastante largo. Esto no permite que los jugadores tengan acceso al contenido cuando no están reunidos. Con esta página se busca que puedan idear sus estrategias y que el tiempo de juego se use al máximo en las aventuras.

## Características Principales

- **Interfaz de Usuario Intuitiva:** La aplicación tendrá un diseño limpio y fácil de usar, con información claramente presentada para una navegación adecuada.
- **Acceso a todo el contenido físico:** Utilizando **imgbb**, se tendrá acceso a todas las imágenes de fotografías tomadas del contenido del juego físico.
- **Filtro de palabras clave:** La página incluirá un filtro de búsqueda de palabras clave para facilitar la sinergia entre cartas y mejorar las estrategias.
- **Simulación de héroe:** La página incluirá la simulación de un héroe para que los participantes puedan llegar a la aventura preparados para jugar directamente.

---

# Tecnologías y Herramientas

- **Front-end:**
  - **Figma:** [Enlace al diseño](https://www.figma.com/design/yqorhySjT81BOHDMDSvJ0A/Untitled?node-id=0-1&p=f&t=bxFfw3HHV3XVuirT-0)
  - **Lenguaje:** Desarrollo puro utilizando HTML, CSS y JavaScript para una implementación más sencilla.
- **GitHub:** Para la gestión de versiones del código en el desarrollo, usando **conventional commits**.

---

# Instrucciones de uso de [MockAPI](https://mockapi.io/)

## Cómo usar la documentación

Accedemos a este enlace: [Documentación de la API](https://67ed98144387d9117bbe1a16.mockapi.io/)

## Uso de la API

### Obtener información

GET https://67ed98144387d9117bbe1a16.mockapi.io/api/v1/:endpoint


```json
[
  {
    "tipo": "heroes",
    "contenido": [
      {
        "nombre": "Aragorn",
        "raza": "Humano",
        "estadisticas": {
          "vigor": 3,
          "sabiduria": 4,
          "agilidad": 2,
          "brio": 2,
          "astucia": 3
        },
        "soporte": {
          "miedo": 5,
          "daño": 5,
          "inspiracion": 4
        },
        "habilidad": "Cuando los Héroes usen Otear durante la fase de reagrupamiento, tú y los Héroes cercanos reveláis cada uno 1 carta adicional.",
        "historia": "Los dûnedain del Norte estuvieron a punto de ser extinguidos. Aunque pocos en número, no cejan en su empeño de proteger las tierras que antaño fueron su reino. Los encabeza su jefe, Aragorn, descendiente de Isildur y destinado para la grandeza. Sin embargo, esas profecías y su linaje de poco le sirven en estos tiempos. La sangre azul no puede detener el filo de un enemigo, y las canciones sobre la gloria por conquistar no sirven para alimentar a tu pueblo. Puede que el futuro les depare años de paz y prosperidad, pero el presente no. Ahora es tiempo de adversidad, penurias y supervivencia. Nuevos peligros amenazan al Norte en cada vez mayor número, y los años más oscuros aún están por llegar.",
        "inicio": {
          "cometido": "Capitan",
          "arma1": "Espada",
          "arma2": "Estandarte",
          "armadura": "Atuendo de Viaje"
        }
      }, ....
    ]
  }
]

```

# Historias de usuario

**Inicio parte 1/2**

```less
**Como:** usuario,
**Quiero:** ver el clima actual de mi ubicación con una interfaz atractiva, 
**Para:** conocer rápidamente la temperatura, sensación térmica y condiciones del clima.


## Obtener datos de la API
- [ ] La aplicación debe consumir los datos de WeatherAPI.
- [ ] Se debe realizar una petición a la API con la ciudad del usuario o su geolocalización.
- [ ] Los datos deben actualizarse en tiempo real cuando el usuario seleccione una nueva ubicación.

## Mostrar información del clima actual
- [ ] Se debe mostrar la temperatura actual en grados Celsius o Fahrenheit (según configuración).
- [ ] Incluir la sensación térmica basada en la velocidad del viento y la humedad.
- [ ] Mostrar el estado del clima con un icono representativo y una descripción (ejemplo: "Cloudy").
- [ ] Visualizar la fecha y hora de actualización de los datos meteorológicos.

## Visualizar el pronóstico por días y horas
- [ ] Se visualizan tres pestañas de selección para mostrar el pronóstico:

- Hoy (muestra el clima actual y su evolución por horas).
- Mañana (muestra un resumen del clima del día siguiente).
- 10 días (pronóstico extendido).
- [ ] La pestaña activa se resalta visualmente con un fondo más opaco y texto en negrita.
- [ ] Al hacer clic en otra pestaña, la información se actualiza dinámicamente sin recargar la página.
- [ ] La sección Hourly Forecast muestra la temperatura y el estado del clima por horas.


## Mostrar datos adicionales del clima
- [ ] Se presentan cuatro tarjetas informativas, cada una con icono y valores dinámicos:

- Velocidad del viento (Ejemplo: "12 km/h") con un icono de viento 🌬️.
- Probabilidad de lluvia (Ejemplo: "24%") con un icono de lluvia 🌧️.
- Presión atmosférica (Ejemplo: "720 hPa") con un icono de presión 🌡️.
- Índice UV (Ejemplo: "2.3") con un icono de sol ☀️.

- [ ] Cada tarjeta tiene colores suaves y un borde redondeado para mejorar la experiencia visual.
- [ ] Cuando un valor cambia significativamente, el color del texto cambia rojo🔻/verde🔺 para indicar variaciones importantes.


## Interactividad y diseño atractivo

### Encabezado
- [ ] Se visualiza la hora actual en la parte superior izquierda.
- [ ] Se muestra el nombre de la ciudad y el país debajo de la hora.
- [ ] Se incluye un icono de búsqueda 🔍 en la parte superior derecha para permitir al usuario cambiar de ubicación.

### Sección Principal del Clima
- [ ] Se muestra una ilustración animada o un fondo dinámico que cambia según el clima y la hora del día.
- [ ] Se visualiza la temperatura actual en el centro con un tamaño de fuente grande.
- [ ] Se muestra la sensación térmica debajo de la temperatura con una fuente más pequeña.
- [ ] Se incluye el estado del clima (Ejemplo: "Cloudy") junto con un icono representativo.

### Pronóstico por Horas (Hourly Forecast)
- [ ] Se muestra una sección con el título "Hourly Forecast".
- [ ] Se presentan las siguientes horas en un carrusel horizontal deslizable.
- [ ] Cada bloque de hora muestra:

- La hora en la parte superior.
- Un icono del clima en el centro.
- La temperatura esperada en la parte inferior.

- [ ] El fondo de cada bloque cambia ligeramente de color si la temperatura es más alta o baja en comparación con el resto del día.
- [ ] Se puede deslizar hacia la derecha para ver más horas sin necesidad de recargar la página.

### Fondo Dinámico y Animaciones
- [ ] El fondo de la aplicación cambia según la hora del día y el clima:

- Día soleado: Fondo con tonos azulados y sol brillante. ☀️
- Noche despejada: Fondo oscuro con estrellas brillantes. 🌙
- Lluvia: Fondo con gotas animadas y cielo gris. 🌧️
- Nublado: Fondo con nubes en movimiento. ☁️

- [ ] Se usan transiciones suaves al actualizar la información (fade-in/fade-out).
- [ ] Se implementa una animación en la temperatura al cambiar los valores para que no sea abrupto.


## Navegación y Funcionalidad Extra
### Barra de búsqueda emergente
- [ ] Al hacer clic en el icono de búsqueda 🔍, aparece una barra de búsqueda con autocompletado.
- [ ] Los resultados de ciudades se muestran en una lista desplegable.

### Almacenamiento de preferencias
- [ ] La aplicación recuerda la última ciudad consultada con localStorage.
- [ ] Se puede seleccionar una ciudad favorita para que siempre se cargue al abrir la app.

### Modo Oscuro / Claro
- [ ] El usuario puede alternar entre:

- Modo claro (fondos claros).
- Modo oscuro (fondos oscuros).

- [ ] La configuración se guarda automáticamente en localStorage.

### Carga optimizada de datos
- [ ] Se muestra un indicador de carga mientras se obtienen los datos.
- [ ] Si hay un error con la API, aparece un mensaje de error en la interfaz en lugar de dejar la pantalla en blanco.
```

**Inicio parte 2/2**

```less

## Obtener datos de la API
- [ ] La aplicación debe consumir los datos de WeatherAPI.
- [ ] Se debe realizar una petición a la API con la ciudad del usuario o su geolocalización.
- [ ] Los datos deben actualizarse en tiempo real cuando el usuario seleccione una nueva ubicación.

## Mostrar pronóstico diario con gráfico de temperatura
- [ ] Se muestra una gráfica de líneas que representa la evolución de la temperatura durante la semana.
- [ ] Se visualiza la temperatura máxima y mínima para cada día.
- [ ] Se resalta con un punto y una etiqueta la temperatura actual dentro del gráfico.
- [ ] Al deslizar el dedo sobre el gráfico, se muestra información detallada del día seleccionado.

## Mostrar probabilidad de lluvia por hora
- [ ] Se presenta una sección con barras horizontales que indican la probabilidad de lluvia para las próximas horas.
- [ ] Cada barra representa un rango horario (Ejemplo: 7 PM, 8 PM, 9 PM, 10 PM).
- [ ] El color de la barra cambia de intensidad según el porcentaje de lluvia.
- [ ] Se muestra el porcentaje exacto de probabilidad de lluvia en el lado derecho de cada barra.

## Mostrar horarios de amanecer y atardecer
- [ ] Se presentan dos tarjetas informativas en la parte inferior de la vista:

- Amanecer 🌙 con la hora exacta de salida del sol.
- Atardecer ☀️ con la hora exacta en que el sol se oculta.

- [ ] Se indica el tiempo transcurrido desde el amanecer y cuánto falta para el atardecer.

## Navegación y Funcionalidad Extra
### Almacenamiento de preferencias
- [ ] La aplicación recuerda la última ciudad consultada con localStorage.
- [ ] Se puede seleccionar una ciudad favorita para que siempre se cargue al abrir la app.

### Modo Oscuro / Claro
- [ ] El usuario puede alternar entre:

- Modo claro (fondos claros).
- Modo oscuro (fondos oscuros).

- [ ] La configuración se guarda automáticamente en localStorage.

### Carga optimizada de datos
- [ ] Se muestra un indicador de carga mientras se obtienen los datos.
- [ ] Si hay un error con la API, aparece un mensaje de error en la interfaz en lugar de dejar la pantalla en blanco.


```

**proximos 10 dias**

```less
**Como:** usuario
**Quiero:** visualizar el pronóstico del clima para los próximos 10 días
**Para:** planificar mis actividades con anticipación según las condiciones meteorológicas

## Obtener datos de la API
- [ ] La aplicación debe consumir los datos de WeatherAPI.
- [ ] Se debe realizar una petición a la API para obtener el pronóstico extendido de 10 días.
- [ ] Los datos deben actualizarse en tiempo real cuando el usuario seleccione una nueva ubicación.


## Visualizar el pronóstico extendido de 10 días
- Se visualizan tres pestañas de selección para alternar entre:

- Hoy (clima actual y evolución por horas).
- Mañana (resumen del clima del día siguiente).
- 10 días (pronóstico extendido).

- [ ] La pestaña "10 días" debe estar resaltada visualmente cuando se seleccione.
- [ ] Al hacer clic en otra pestaña, la información debe actualizarse dinámicamente sin recargar la página.

## Mostrar la lista del pronóstico de los próximos 10 días
- [ ] Se presenta una lista vertical desplazable con el pronóstico de los 10 días siguientes.

- Cada día en la lista incluye:

- [ ] Fecha completa (Ejemplo: "Thursday, Jan 19").
- [ ] Descripción del clima (Ejemplo: "Cloudy and Sunny").
- [ ] Temperatura máxima y mínima (Ejemplo: "3° / -2°").
- [ ] Icono representativo del clima (Ejemplo: sol y nubes ☀️☁️).
- [ ] Botón de más información (ícono desplegable ⏷) para ver detalles adicionales del clima de ese día.

- [ ] Se debe permitir deslizar hacia abajo para ver todos los días disponibles.
- [ ] El fondo de cada tarjeta cambia ligeramente de tono según la temperatura promedio del día.


## Diseño de la Lista de Pronóstico
- [ ] Cada día se presenta en una tarjeta con bordes redondeados.
- [ ] El color de fondo de cada tarjeta cambia en función de la temperatura predominante.
- [ ] Se usa una fuente clara y legible para la fecha y la temperatura.
- [ ] Se permite tocar el botón desplegable ⏷ para mostrar más detalles del día seleccionado.

## Fondo Dinámico y Animaciones
- [ ] El fondo de la aplicación cambia según la hora del día y el clima:

- Día soleado: Fondo con tonos azulados y sol brillante. ☀️
- Noche despejada: Fondo oscuro con estrellas brillantes. 🌙
- Lluvia: Fondo con gotas animadas y cielo gris. 🌧️
- Nublado: Fondo con nubes en movimiento. ☁️

- [ ] Se usan transiciones suaves al actualizar la información (fade-in/fade-out).
- [ ] Se implementa una animación en la temperatura al cambiar los valores para que no sea abrupto.


## Navegación y Funcionalidad Extra
### Almacenamiento de preferencias
- [ ] La aplicación recuerda la última ciudad consultada con localStorage.
- [ ] Se puede seleccionar una ciudad favorita para que siempre se cargue al abrir la app.

### Modo Oscuro / Claro
- [ ] El usuario puede alternar entre:

- Modo claro (fondos claros).
- Modo oscuro (fondos oscuros).

- [ ] La configuración se guarda automáticamente en localStorage.

### Carga optimizada de datos
- [ ] Se muestra un indicador de carga mientras se obtienen los datos.
- [ ] Si hay un error con la API, aparece un mensaje de error en la interfaz en lugar de dejar la pantalla en blanco.
```