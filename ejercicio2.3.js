const usuariosCrudos = [
  { id: 1, nombre: 'Sara', direccion: { calle: 'Reforma 10', ciudad: 'Ciudad de México' }, contacto: { telefono: '55 1234 5678', correo: 'sara@ejemplo.com' } },
  { id: 2, nombre: 'Luis', direccion: { calle: 'Juárez 22', ciudad: 'Guadalajara' }, contacto: { telefono: '33 8765 4321', correo: 'luis@ejemplo.com' } },
  { id: 3, nombre: 'Marta', direccion: { calle: 'Hidalgo 5', ciudad: 'Monterrey' }, contacto: { telefono: '81 5555 0000', correo: 'marta@ejemplo.com' } },
];

for (const { nombre, direccion: { ciudad }, contacto: { telefono } } of usuariosCrudos) {
  console.log(nombre, ciudad, telefono);
}

const usuariosActivos = usuariosCrudos.map((usuario) => ({ ...usuario, activo: true }));
console.log(usuariosActivos[0].activo, 'activo' in usuariosCrudos[0]); 
