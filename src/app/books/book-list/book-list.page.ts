import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../services/google-books.service';
import { BookModel } from '../book.model';

const MIN_SEARCH_LENGHT = 3;

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {

  books = new Array<BookModel>();

  constructor(private google: GoogleBooksService) { }

  ngOnInit() {
  }

  public search(event: { detail: { value: string } }) {
    const keyWord = event.detail.value;
    if (keyWord && keyWord.length > MIN_SEARCH_LENGHT) {
      this.google.list(event.detail.value).subscribe(ret => this.books = ret);
    }
  }
}
