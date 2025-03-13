// Arrays

// Given an array, Print numbers which are greater then 50
let arr = [23, 56, 76, 56, 67,45,32,11,87];
let filterArray = arr.filter((arr) => arr > 50);
console.log(filterArray);


// Given let numbers = [2, 4, 6, 8];, use .map() to create a new array where each element is doubled.
let numbersArray = [2, 4, 6, 8];
let doubledNumbers = numbersArray.map((num) => num * 2);
console.log(doubledNumbers);


// Merge the arrays let arr1 = [1, 2, 3]; and let arr2 = [4, 5, 6]; into a single array.
let Array = [1, 2, 3];
let Array2 = [4, 5, 6];
let mergeAray = [...Array, ...Array2];
console.log(mergeAray);


// Reverse the array let letters = ["a", "b", "c", "d", "e"]; without using any built-in method.
let letter = ["a", "b", "c", "d", "e"];
let reversedArray = [];

for (let index = letter.length - 1; index >= 0; index--) {
  reversedArray.push(letter[index]);
}
console.log(reversedArray);


// Extract the first three elements from let numbers = [10, 20, 30, 40, 50];
let numbers = [10, 20, 30, 40, 50];
let extractedArray = numbers.slice(0, 3);
console.log(extractedArray);

// Remove the second and third elements from let items = ["pen", "notebook", "eraser", "marker"]; using .splice()
let items = ["pen", "notebook", "eraser", "marker"];
let removeItemArray = items.splice(1, 2);
console.log(removeItemArray);
console.log(items);

// Remove duplicate values from let values = [1, 2, 2, 3, 4, 4, 5]; and return a unique array.
let values = [1, 2, 2, 3, 4, 4, 5];
let uniqueValues = [...new Set(values)];
console.log(uniqueValues);


// Use .reduce() to find the sum of let numbers = [5, 10, 15, 20];.
let number = [5, 10, 15, 20];
let initialValue = 0;
let reducewithSum = number.reduce((accumulator, currentValue) =>
   accumulator + currentValue,initialValue);
console.log(reducewithSum);

// String


// Replace "morning" with "evening" in let greeting = "Good morning!";.
let greeting = "Good Morning!";
let replaceString = greeting.replace("Morning", "Evening");
console.log(replaceString);


// Convert let words = "apple,banana,grape"; into an array of words.
let words = "apple,banana,grape";
let wordArray = words.split();
console.log(wordArray);


// Write a function to count the number of words in a sentence:
function CountWords(sentence) {
  return sentence.length
}
let sentence = 'Iam doing Javascript'
console.log(CountWords(sentence));


// Find  all the occurences of a chracter in a string. For example character : h, sentence: "hello world" output 1
function findIndex(char, sentence) {
  let index = sentence.indexOf(char);
  return index !== -1 ? index + 1 : -1;
}
console.log(findIndex("w", "hello world"));
console.log(findIndex("f", "hifza"));


// Objects

// Write a function to print key-values of a give object
// Write a function to check if a give key is present in object or not. For example key = "age" , object = { name: "Kakashi" } output: false

let student = {
  name : "hifza",
  age: 20,
  gender: "female",
  degree :"BSCS"
}
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(student.hasOwnProperty("degree"));
console.log(student.hasOwnProperty("eduction"));

// Write a function to merge two objects. For example obj1 = {name: "Itachi " } obj2 = {age: 21} -> output obj3 = {name: "Itachi", age: 21}

let obj1 = {name: "Itachi " }
let obj2 = {age: 21}
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
let obj3 = mergeObjects(obj1, obj2);
console.log(obj3); 
 
 	
// Given an array of objects representing products, find the product with the highest price. let products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 600 }
// ];

  let products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 600 }
  ];
  
  let highestPrice = products.reduce((max, product) => 
    product.price > max.price ? product : max, products[0]);
  
  console.log(highestPrice); 

  

