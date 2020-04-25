import { BookModel } from '../book.model';
import { Observable } from 'rxjs';

export interface BookService {
  findByISBN(isbn: string, callback: (book: BookModel) => void): void;
  findById(isbn: string): Observable<BookModel>;
  findIdByISBN(isbn: string): Observable<string>;
  parse(response: any): BookModel;
  list(keyWord: string): Observable<Array<BookModel>>;
}
