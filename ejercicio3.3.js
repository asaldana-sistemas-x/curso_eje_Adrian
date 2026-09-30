async function obtenerPost(id) {
  try {
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    console.log(datos);
    return datos;
  } catch (error) {
    console.error('No se pudo obtener el post:', error.message);
  }
}

obtenerPost(1);