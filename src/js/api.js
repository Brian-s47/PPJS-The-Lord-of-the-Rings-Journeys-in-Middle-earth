
// Creacion de URL para API
const key = `67ed98144387d9117bbe1a16`;
const url = new URL(`https://${key}`);
url.protocol += `https:`;
url.hostname += `.mockapi.io`;
url.pathname += `api`;

// Modulo para carga de datos de la API
export const find = async()=>{
  const response = await fetch(url.toString(), {method: "get"});
  return await response.json()  
}
// Modulo Para buscar Heroe
export const search = async(nombre)=>{
  const data = await find();
  try {
      return data[0].contenido.find(heroe => heroe.nombre === nombre);
    } catch (error) {
      console.error("Error al buscar el héroe:", error);
      return null;
    }
}
// Modulo para registrar usuario
export const save = async (formulario) => {
  const cabeceras = new Headers();
  cabeceras.set("Content-Type", "application/json");
  const opciones = {
      method: "post", 
      headers: cabeceras,
      body: JSON.stringify(formulario)
  };
  const response = await fetch(url.toString(), opciones);
};
// Modulo para inicio de sesion de usuario
export const incioSesion = async (usuario, contrasena) => {
  const data = await find();
  for(let i = 1; i <= data.length; i++){
    if(data[i].usuario === usuario && data[i].contraseña === contrasena){
      return true
    }
  }
};
// Modulo traer informacion de usuario activo
export const datosUsuarioActivo = async (usuarioActivo) =>{
  const data = await find();
}