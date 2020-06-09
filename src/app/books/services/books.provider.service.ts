import { Injectable } from '@angular/core';
import { DatabaseProvider } from 'src/app/core/database-provider.service';
import { BookModel } from '../book.model';
import { IProvider } from '../../core/provider.interface';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable()
export class BooksProvider implements IProvider<BookModel>{
  constructor(private dbProvider: DatabaseProvider) { }

  public async insert(record: BookModel): Promise<void> {
    return this.dbProvider.Db
      .then(async (db: SQLiteObject) => {
        try {
          return db.executeSql(Queries.Books.Insert, [
            record.title, record.description, record.isbn, record.authors.join(','),
            record.publisher, record.pages, record.categories.join(','), record.thumbs.large, record.year, record.status
          ]);
        } catch (e) {
          return console.error(e);
        }
      })
      .catch((e) => console.error(e));
  }

  public async update(record: BookModel): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public async remove(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public async get(id: number): Promise<BookModel> {
    throw new Error("Method not implemented.");
  }

  public async getAll(id: number): Promise<BookModel[]> {
    throw new Error("Method not implemented.");
  }
}
