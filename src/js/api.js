// Creacion de URL para API
const key = `67ed98144387d9117bbe1a16`;
const url = new URL(`https://${key}`);
url.protocol += `https:`;
url.hostname += `.mockapi.io`;
url.pathname += `LOTR/componentes/`;

//Modulo para carga de datos de la API
export const find = async()=>{
    const response = await fetch(url.toString(), {method: "get"});
    return await response.json()  
}
//Modulo Para buscar Heroe
export const search = async(nombre)=>{
    const data = await find();
    try {
        return data[0].contenido.find(heroe => heroe.nombre === nombre);
      } catch (error) {
        console.error("Error al buscar el héroe:", error);
        return null;
      }
}