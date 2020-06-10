import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookListPage } from "./book-list/book-list.page";
import { BookFormPage } from "./book-form/book-form.page";

const routes: Routes = [
  {
    path: "",
    component: BookListPage,
  },
  {
    path: "list",
    component: BookListPage,
  },
  {
    path: "form",
    component: BookFormPage,
  },
  {
    path: "form/:id",
    component: BookFormPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
