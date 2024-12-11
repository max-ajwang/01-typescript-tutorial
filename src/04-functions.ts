import { boolean } from 'zod';

function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}!!!`);
}

sayHi('john');
// sayHi(3)
// sayHi('peter', 'random');

// function return values
function calculateDiscount(price: number): number {
  // price.toUpperCase();
  const hasDiscount = true;
  if (hasDiscount) {
    return price;
    // return 'Discount Applied';
  }
  return price * 0.9;
}

// Challenge
let teams: string[] = [
  'Manchester United',
  'Manchester City',
  'Arsenal',
  'Chalsea',
  'Liverpool',
];

function isTeamInTheList(name: string) {
  return teams.includes(name);
}

let teamToCheck = 'Manchester United';

if (isTeamInTheList(teamToCheck)) {
  console.log(`${teamToCheck} is in the list`);
} else {
  console.log(`${teamToCheck} is not in the list`);
}

// Functions - Optional and Default Parameters

function calculatePrice(price: number, discount?: number) {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount); // Output: 80

let priceWithoutDiscount = calculatePrice(300);
console.log(priceWithoutDiscount); // Output: 300

function calculateScore(initialScore: number, penaltyPoints: number = 0) {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
console.log(scoreAfterPenalty); // Output: 80

let scoreWithoutPenalty = calculateScore(300);
console.log(scoreWithoutPenalty); // Output: 300

// Function - rest parameter

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message} ${total}`;
}

let result = sum('The total is:', 1, 2, 3, 4, 5); // result will be "The total is: 15"

// Objects as Parameters
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const firstEmp = createEmployee({ id: 4 });
const secondEmp = createEmployee({ id: 9 });

console.log(firstEmp, secondEmp);
