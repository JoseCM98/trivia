import { Injectable } from '@angular/core';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  databaseObj: SQLiteObject;
  tables={
    notas:'notas'
  };
  constructor(private sqlite: SQLite,
    private platform: Platform) {
      this.platform.ready().then(() => {
        this.createDatabase();
    });
    }
  async createDatabase(){
    this.sqlite.create({
      name: 'dbprueba',
      location: 'default'
  }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      console.log('se creo con exito');
      this.createTables();
  });
  }
  async createTables(){
    await this.databaseObj.executeSql(
      `CREATE TABLE IF NOT EXISTS ${this.tables.notas} (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL UNIQUE,
      titulo VARCHAR(255) NOT NULL, descripcion VARCHAR(255) NOT NULL
      )`,[]
    );
  }

  async getNotas(){

    return  await this.databaseObj.executeSql('SELECT * FROM notas' ,[]).
    then((res)=>{
      const a='';
      return res;
    }).catch((e)=>{
      const b='';
      return 'error obteniendo datos'+JSON.stringify(e);
    });
  }
  async agregarNotas(nota: any){
    const sql = 'INSERT INTO notas(name,titulo,descripcion) VALUES (?,?,?)';
    return this.databaseObj.executeSql(sql,[nota.name,nota.titulo,nota.descripcion]);
  }
  async editarNotas(nota: any){
    const sql = 'UPDATE notas SET titulo=?,texto=? WHERE id=?';
    return this.databaseObj.executeSql(sql,[nota.name,nota.titulo,nota.descripcion,nota.id]);
  }
  async eliminarNotas(nota: any){
    const sql = 'DELETE FROM notas WHERE id=?';
    return this.databaseObj.executeSql(sql,[nota.id]);
  }
}
