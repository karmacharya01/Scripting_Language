function add(a, b) {
  return a + b;
}

console.log("Sum =", add(10, 20));

function check(num) {
  if (num % 2 === 0) console.log("Even");
  else console.log("Odd");
}

check(7);

const factorial = function(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
};

console.log("Factorial =", factorial(5));


function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript"));

function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();
greet("Ram");

const square = (num) => num * num;

console.log("Square =", square(5));

let message = function () {
  console.log("Welcome to JavaScript");
};

message();
