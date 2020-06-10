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
    path: "add",
    component: BookFormPage,
  },
  {
    path: "add/:isbn",
    component: BookFormPage,
  },
  {
    path: "edit/:id",
    component: BookFormPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
