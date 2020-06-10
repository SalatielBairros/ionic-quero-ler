import { Injectable } from "@angular/core";
import { DatabaseProvider } from "src/app/core/database-provider.service";
import { BookModel } from "../book.model";
import { IProvider } from "../../core/provider.interface";
import { SQLiteObject } from "@ionic-native/sqlite/ngx";

@Injectable()
export class BooksProvider implements IProvider<BookModel> {
  constructor(private dbProvider: DatabaseProvider) {}

  public async insert(record: BookModel): Promise<void> {
    return this.dbProvider.Db.then(async (db: SQLiteObject) => {
      try {
        return db.executeSql(Queries.Books.Insert, [
          record.title,
          record.description,
          record.isbn,
          record.authors.join(","),
          record.publisher,
          record.pages,
          record.categories.join(","),
          record.thumbs.large,
          record.year,
          record.status,
        ]);
      } catch (e) {
        return console.error(e);
      }
    }).catch((e) => console.error(e));
  }

  public async update(record: BookModel): Promise<void> {
    return this.dbProvider.Db.then(async (db: SQLiteObject) => {
      try {
        return db.executeSql(Queries.Books.Update, [
          record.title,
          record.description,
          record.isbn,
          record.authors.join(","),
          record.publisher,
          record.pages,
          record.categories.join(","),
          record.thumbs.large,
          record.year,
          record.status,
          record.id,
        ]);
      } catch (e) {
        return console.error(e);
      }
    }).catch((e) => console.error(e));
  }

  public async remove(id: number): Promise<void> {
    return this.dbProvider.Db.then(async (db: SQLiteObject) => {
      try {
        return db.executeSql(Queries.Books.Delete, [id]);
      } catch (e) {
        return console.error(e);
      }
    }).catch((e) => console.error(e));
  }

  public async get(id: number) {
    return this.dbProvider.Db.then(async (db: SQLiteObject) => {
      try {
        const data = await db.executeSql(Queries.Books.SelectOne, [id]);
        if (data.rows.length === 0) {
          return new BookModel();
        }
        return this.map(data.rows.item(0));
      } catch (e) {
        return console.error(e);
      }
    }).catch((e) => console.error(e));
  }

  public async getAll(id: number): Promise<void | BookModel[]> {
    return this.dbProvider.Db.then(async (db: SQLiteObject) => {
      try {
        const data = await db.executeSql(Queries.Books.SelectAll, [id]);
        if (data.rows.length > 0) {
          return (data.rows as Array<any>).map((x: any) => this.map(x));
        } else {
          return new Array<BookModel>();
        }
      } catch (e) {
        return console.error(e);
      }
    }).catch((e) => console.error(e));
  }

  public map(dbRecord: any): BookModel {
    const book = new BookModel();
    if (dbRecord) {
      book.id = dbRecord.ID;
      book.title = dbRecord.TITLE;
      book.description = dbRecord.DESCRIPTION;
      book.isbn = dbRecord.ISBN;
      book.authors = dbRecord.AUTHROS.split(",");
      book.publisher = dbRecord.PUBLISHER;
      book.pages = dbRecord.PAGES;
      book.categories = dbRecord.CATEGORIES.split(",");
      book.thumbs.large = dbRecord.THUMB;
      book.year = dbRecord.YEAR;
      book.status = dbRecord.STATUS;
    }
    return book;
  }
}
