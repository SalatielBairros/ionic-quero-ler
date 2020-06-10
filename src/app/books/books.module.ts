import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { BooksRoutingModule } from "./books-routing.module";
import { BookFormPage } from "./book-form/book-form.page";
import { BookListPage } from "./book-list/book-list.page";
import { BooksProvider } from "./services/books.provider.service";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BooksRoutingModule],
  declarations: [BookFormPage, BookListPage],
  providers: [BooksProvider],
})
export class BooksModule {}
