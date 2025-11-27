
import * as SQLite from "expo-sqlite";
import { Platform } from "react-native";

class DatabaseService {
  constructor() {
    this.db = null;
  }

  async initialize() {
    if (Platform.OS !== "web") {
      this.db = await SQLite.openDatabaseAsync("miapp.db");

      await this.db.execAsync(`
        CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          fecha_creacion TEXT NOT NULL
        );
      `);
    }
  }

  async getAll() {
    if (Platform.OS === "web") return [];

    return await this.db.getAllAsync(
      "SELECT * FROM usuarios ORDER BY id DESC"
    );
  }

  async add(nombre) {
    const fecha = new Date().toISOString();

    const result = await this.db.runAsync(
      `INSERT INTO usuarios (nombre, fecha_creacion) VALUES (?, ?)`,
      nombre,
      fecha
    );

    return {
      id: result.lastInsertRowId,
      nombre,
      fecha_creacion: fecha,
    };
  }

  
  async update(id, nombre) {
    if (Platform.OS === "web") return;

    await this.db.runAsync(
      `UPDATE usuarios SET nombre = ? WHERE id = ?`,
      nombre,
      id
    );
  }

 
  async remove(id) {
    if (Platform.OS === "web") return;

    await this.db.runAsync(
      `DELETE FROM usuarios WHERE id = ?`,
      id
    );
  }
}

export default new DatabaseService();
