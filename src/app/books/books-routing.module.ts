import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListPage } from './book-list/book-list.page';
import { BookInfoPage } from './book-info/book-info.page';

const routes: Routes = [
  {
    path: '',
    component: BookListPage
  },
  {
    path: 'info/:isbn',
    component: BookInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule { }
