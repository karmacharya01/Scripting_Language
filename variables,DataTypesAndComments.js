/* 
  MULTILINE COMMENT:
  This program demonstrates various common data types in JavaScript 
  using modern 'let' and 'const' variable declarations.
*/

// 1. String Data Type (Text wrapped in quotes)
const developerName = "Alice"; 

// 2. Number Data Type (Both integers and decimals)
let age = 28; 
let codingScore = 95.5; 

// 3. Boolean Data Type (Strictly true or false)
let isPassionate = true; 

// 4. Array Data Type (A list of values indexed by numbers)
let favoriteLanguages = ["JavaScript", "Python", "TypeScript"]; 

// 5. Object Data Type (Key-value pairs representing an entity)
let workstation = {
    brand: "Apple",
    monitors: 2,
    isSetupReady: true
};

// 6. Undefined Data Type (A variable declared but not given a value)
let futureProject; 

// 7. Null Data Type (Intentional absence of any value)
let legacyBugs = null; 

// Printing the values and their corresponding types to the console
console.log("Name:", developerName, "| Type:", typeof developerName);
console.log("Age:", age, "| Type:", typeof age);
console.log("Score:", codingScore, "| Type:", typeof codingScore);
console.log("Is Passionate:", isPassionate, "| Type:", typeof isPassionate);
console.log("Languages:", favoriteLanguages, "| Type:", typeof favoriteLanguages);
console.log("Workstation:", workstation, "| Type:", typeof workstation);
console.log("Future Project:", futureProject, "| Type:", typeof futureProject);
console.log("Legacy Bugs:", legacyBugs, "| Type:", typeof legacyBugs); 
