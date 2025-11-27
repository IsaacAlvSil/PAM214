
import Usuario from "../models/usuario";
import DatabaseService from "../database/DatabaseService";

export default class UsuarioController {
  constructor() {
    this.listeners = [];
  }

  async initialize() {
    await DatabaseService.initialize();
  }

  async obtenerUsuarios() {
    const data = await DatabaseService.getAll();
    return data.map(
      (u) => new Usuario(u.id, u.nombre, u.fecha_creacion)
    );
  }

  async crearUsuario(nombre) {
    Usuario.validar(nombre);

    const nuevo = await DatabaseService.add(nombre.trim());

    this.notifyListeners();

    return new Usuario(nuevo.id, nuevo.nombre, nuevo.fecha_creacion);
  }

  
  async actualizarUsuario(id, nombre) {
    Usuario.validar(nombre);

    await DatabaseService.update(id, nombre.trim());

    this.notifyListeners();
  }

  async eliminarUsuario(id) {
    await DatabaseService.remove(id);

    this.notifyListeners();
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  removeListener(listener) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  notifyListeners() {
    this.listeners.forEach((l) => l());
  }
}
