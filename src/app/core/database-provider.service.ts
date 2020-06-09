import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable()
export class DatabaseProvider {
  public get Db() {
    return this.sqlite.create({
      name: 'quero_ler.db',
      location: 'default'
    });
  }

  private db: SQLiteObject;

  constructor(private sqlite: SQLite) { }

  public async createDatabase(): Promise<void> {
    this.sqlite = new SQLite();
    return this.Db
      .then((db: SQLiteObject) => {
        this.db = db;
        this.createTables();
      })
      .catch(e => {
        console.error(e);
      });
  }

  private createTables(): void {
    this.db.sqlBatch([Queries.Books.Create])
      .then(() => console.log('Tabelas criadas'))
      .catch(e => console.error(e));
  }
}
