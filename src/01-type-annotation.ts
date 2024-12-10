// Type Annotation

// Union
let tax: number | string = 10;
tax = 100;
tax = 'Ksh100';

let requestStatus: 'error' | 'pending' | 'success' = 'success';
requestStatus = 'error';
requestStatus = 'pending';
// requestStatus = 'random'

// Practical Application of Type Annotation

const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '1984') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);
