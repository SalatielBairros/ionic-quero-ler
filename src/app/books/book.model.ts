export class BookModel {
  constructor() {
    this.thumbs = { small: '', large: '' };
  }

  externalId: string;
  title: string;
  subtitle: string;
  authors: Array<string>;
  publisher: string;
  year: number;
  description: string;
  pages: number;
  categories: Array<string>;
  thumbs: {
    small: string;
    large: string;
  };
  isbn: string;
  status: number;
}
