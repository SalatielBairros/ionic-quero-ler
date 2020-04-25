import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { BooksRoutingModule } from './books-routing.module';
import { BookInfoPage } from './book-info/book-info.page';
import { BookListPage } from './book-list/book-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksRoutingModule
  ],
  declarations: [BookInfoPage, BookListPage]
})
export class BooksModule {}
