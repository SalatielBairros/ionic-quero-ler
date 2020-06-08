import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../services/google-books.service';
import { BookModel } from '../book.model';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

const MIN_SEARCH_LENGHT = 3;

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {

  books = new Array<BookModel>();

  constructor(private google: GoogleBooksService,
              private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  public search(event: { detail: { value: string } }) {
    const keyWord = event.detail.value;
    if (keyWord && keyWord.length > MIN_SEARCH_LENGHT) {
      this.google.list(event.detail.value).subscribe(ret => this.books = ret);
    }
  }

  public openScaner(){
    this.barcodeScanner.scan().then(value => {
      console.log(value);
    }).catch(err => console.log(err));
  }
}
