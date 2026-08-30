let text = "  Hello JavaScript World!  ";

console.log("Original String:", text);

// trim()
console.log("trim():", text.trim());

// toUpperCase()
console.log("toUpperCase():", text.toUpperCase());

// toLowerCase()
console.log("toLowerCase():", text.toLowerCase());

// length
console.log("length:", text.length);

// charAt()
console.log("charAt(2):", text.charAt(2));

// indexOf()
console.log("indexOf('Java'):", text.indexOf("Java"));

// includes()
console.log("includes('World'):", text.includes("World"));

// slice()
console.log("slice(2, 7):", text.slice(2, 7));

// substring()
console.log("substring(2, 7):", text.substring(2, 7));

// replace()
console.log("replace():", text.replace("JavaScript", "JS"));

// concat()
let str1 = "Hello";
let str2 = "World";
console.log("concat():", str1.concat(" ", str2));

// repeat()
console.log("repeat():", str1.repeat(3));
