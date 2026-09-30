async function flujoUsuarios() {
  try {
    const u1 = await obtenerUsuarioProm(1);
    const u2 = await obtenerUsuarioProm(u1.id + 1);
    const u3 = await obtenerUsuarioProm(u2.id + 1);
    console.log('Resultado final:', u3);
  } catch (error) {
    console.error('Error capturado:', error.message);
  } finally {
    console.log('Flujo terminado');
  }
}

flujoUsuarios();