import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthenticationGuard } from "./auth/authentication.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "folder/Home",
    pathMatch: "full",
    canActivate: [AuthenticationGuard],
  },
  {
    path: "folder/:id",
    loadChildren: () =>
      import("./folder/folder.module").then((m) => m.FolderPageModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: "login",
    loadChildren: () =>
      import("./auth/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: "books",
    loadChildren: () =>
      import("./books/books.module").then((m) => m.BooksModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
