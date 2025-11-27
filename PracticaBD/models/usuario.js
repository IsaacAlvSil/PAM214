export default class Usuario {
  constructor(id = null, nombre, fechaCreacion = new Date().toISOString()) {
    this.id = id;
    this.nombre = nombre;
    this.fecha_creacion = fechaCreacion;
  }

  
  static validar(nombre) {
    if (!nombre || nombre.trim() === "") {
      throw new Error("El nombre no puede estar vacío");
    }
    if (nombre.length > 50) {
      throw new Error("El nombre no puede tener más de 50 caracteres");
    }
    return true;
  }
}
