import { Injectable } from "@angular/core";
import { BooksProvider } from "./books.provider.service";

@Injectable({
  providedIn: "root",
})
export class BooksService {
  constructor(private provider: BooksProvider) {}
}
