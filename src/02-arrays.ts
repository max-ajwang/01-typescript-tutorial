// Arrays
let prices: number[] = [10, 20, 30, 40];
// prices.push('10') // Gives typescript error

let fruit: string[] = ['apple', 'orange'];
// fruit.push(1);
// let people: string[] = ['bobo', 'peter', 1];
//
// be careful "[]" means literally empty array
// let randomValues: [] = [1];

// be careful with inferred array types
// let names = ['peter', 'susan'];
// let names = ['peter', 'susan', 1];
let array: (string | boolean)[] = ['apple', true, 'orange', false];
