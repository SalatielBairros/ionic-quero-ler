const Queries = {
  Books: {
    // tslint:disable-next-line: max-line-length
    Create: 'CREATE TABLE IF NOT EXISTS BOOKS(ID INTEGER PRIMARY KEY AUTOINCREMENT, TITLE TEXT, DESCRIPTION TEXT, ISBN TEXT, AUTHORS TEXT, PUBLISHER TEXT, PAGES INTEGER, CATEGORIES TEXT, THUMB TEXT, YEAR INTEGER, STATUS INTEGER)',
    // tslint:disable-next-line: max-line-length
    Insert: 'INSERT INTO BOOKS (TITLE, DESCRIPTION, ISBN, AUTHORS, PUBLISHER, PAGES, CATEGORIES, THUMB, YEAR, STATUS) VALUES (?,?,?,?,?,?,?,?,?,?)'
  }
}