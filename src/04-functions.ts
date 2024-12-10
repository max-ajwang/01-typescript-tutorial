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
