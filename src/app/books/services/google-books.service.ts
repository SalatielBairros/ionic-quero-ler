import { Injectable } from '@angular/core';
import { BookModel } from '../book.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { BookService } from './book-service.interface';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService implements BookService {
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  public findByISBN(isbn: string, callback: (book: BookModel) => void) {
    this.findIdByISBN(isbn)
      .subscribe(id => this.findById(id).subscribe(callback));
  }

  public findById(id: string): Observable<BookModel> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
      .pipe(
        map((result: any) => {
          if (result) {
            return this.parse(result);
          } else {
            return null;
          }
        }));
  }

  public list(keyWord: string): Observable<Array<BookModel>> {
    return this.http.get<any>(`${this.baseUrl}?q=${keyWord}`)
      .pipe(
        map((result: any) => {
          if (result.totalItems && result.items && result.items.length) {
            return (result.items as Array<any>).map(this.parse);
          } else {
            return new Array<BookModel>();
          }
        }));
  }

  public findIdByISBN(isbn: string): Observable<string> {
    return this.http.get<any>(`${this.baseUrl}?q=isbn:${isbn}&fields=items/id`)
      .pipe(
        map((result: any) => {
          if (result && result.items && result.items.length) {
            return result.items[0].id;
          } else {
            return null;
          }
        }));
  }

  public parse(response: any): BookModel {
    const book = new BookModel();
    book.externalId = response.id;
    book.title = response.volumeInfo.title;
    book.subtitle = response.volumeInfo.subtitle;
    book.authors = response.volumeInfo.authors;
    book.publisher = response.volumeInfo.publisher;
    book.description = response.volumeInfo.description;
    book.year = +response.volumeInfo.publishedDate;
    book.pages = response.volumeInfo.pageCount;
    book.categories = response.volumeInfo.categories;
    book.thumbs.small = response.volumeInfo.imageLinks.thumbnail;
    book.thumbs.large = response.volumeInfo.imageLinks.large;

    if (response.volumeInfo.industryIdentifiers) {
      const isbn = response.volumeInfo.industryIdentifiers.find((x: any) => x.type === 'ISBN_13');
      if (isbn) {
        book.isbn = isbn.identifier;
      }
    }
    return book;
  }
}
