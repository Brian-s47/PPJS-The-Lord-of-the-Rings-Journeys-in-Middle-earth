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
# Estructura de Archivos

Se usara la siguiente estrcutura de archivos para mantener un orden que promueva la modularidad, mantenibilidad y reutilizacion de codigo.

**Estructura**
```
│── 📂 docs/               # Documentación del proyecto
│   ├── README.md          # Instrucciones generales
│── 📂 public/             # Archivos accesibles públicamente
│   ├── favicon.png        # Ícono del sitio 
│   ├── index.html         # Página principal
│── 📂 src/                # Código fuente
│   ├── 📂 assets/         # Recursos estáticos
│   │   ├── 📂 font/       # fuentes
│   │   ├── 📂 icon/       # íconos
│   │   ├── 📂 img/        # imágenes
│   ├── 📂 components/     # Componentes reutilizables en HTML
│   │   ├── footer.html    # Pie de página
│   │   ├── header.html    # Encabezado de la página
│   ├── 📂 css/            # Estilos CSS
│   │   ├── main.css       # Estilos principales
│   │   ├── variables.css  # Variables de colores y temas
│   │   ├── components.css # Estilos específicos de componentes 
│   │   ├── responsive.css # Estilos responsivos
│   ├── 📂 data/           # Datos estáticos o de configuración  
│   │   ├── data.json      # Configuración del proyecto
│   ├── 📂 js/             # Scripts de JavaScript  
│   │   ├── api.js         # Llamadas a la API (fetch, manejo de datos)  
│   │   ├── events.js      # Gestión de eventos (botones, interacciones)  
│   │   ├── main.js        # Archivo principal, punto de entrada  
│   │   ├── storage.js     # Funciones de almacenamiento en Local Storage  
│   │   ├── ui.js          # Manipulación del DOM (carga de contenido)  
```

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

