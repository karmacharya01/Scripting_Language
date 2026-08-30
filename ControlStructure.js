// Control Structures in JavaScript
let age = 20;
let day = 3;

// 1. if Statement
if (age >= 18) {
  console.log("You are eligible to vote.");
}

// 2. if...else Statement
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// 3. if...else if...else Statement
let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

// 4. switch Statement
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid Day");
}

// 5. for Loop
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 6. while Loop
console.log("While Loop:");
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

// 7. do...while Loop
console.log("Do While Loop:");
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// 8. break Statement and continue statement
console.log("Continue & Break Example:");
for (let x = 1; x <= 10; x++) {
  if (x === 4) {
    continue;
  } else if (x === 9) {
    break;
  }
  console.log(x);
}
