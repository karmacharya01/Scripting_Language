// Creating an array
let arr = [10, 20, 30, 40, 50];

console.log("Original Array:", arr);

// 1. Add element at the end
arr.push(60);
console.log("After push(60):", arr);

// 2. Remove last element
arr.pop();
console.log("After pop():", arr);

// 3. Add element at the beginning
arr.unshift(5);
console.log("After unshift(5):", arr);

// 4. Remove first element
arr.shift();
console.log("After shift():", arr);

// 5. Find length of array
console.log("Length of array:", arr.length);

// 6. Search an element
let index = arr.indexOf(30);
console.log("Index of 30:", index);

// 7. Sort array
let nums = [40, 10, 50, 20, 30];
nums.sort((a, b) => a - b);
console.log("Sorted Array:", nums);

// 8. Reverse array
nums.reverse();
console.log("Reversed Array:", nums);

// 9. Traverse array
// console.log("Array Elements:");
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 10. Sum of array elements
// let sum = 0;
// for (let num of arr) {
//     sum += num;
// }
// console.log("Sum =", sum);

// 11. Maximum and Minimum
console.log("Maximum =", Math.max(...arr));
console.log("Minimum =", Math.min(...arr));

// // 12. Delete element using splice
// arr.splice(2, 1); // Removes 1 element from index 2
// console.log("After splice:", arr);

// // 13. Insert element using splice
// arr.splice(2, 0, 25); // Insert 25 at index 2
// console.log("After inserting 25:", arr);