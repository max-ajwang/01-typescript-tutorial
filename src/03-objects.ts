let car: { brand: string; year: number } = { brand: 'Mercedes', year: 2024 };
car.brand = 'Mercedes Maybach';
// car.color = 'White' // Geives Error

let car1: { brand: string; year: number } = { brand: 'audi', year: 2021 };
// let car2: { brand: string; year: number } = { brand: 'audi' };

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 5 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook]; // readonly and optional property (?)

// items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only property
