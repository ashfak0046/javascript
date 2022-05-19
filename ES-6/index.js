console.clear();

// //!Default && Rest Parameter
// const defaultParams = (text = "hi there iam default") => {
//   console.log(`${text}`);
// };
// defaultParams();
// defaultParams("Text Included");

// const restParams = (a, b, ...rest) => {
//   console.log(`a = ${a},b = ${b},rest = ${rest}`);
// };
// restParams(10, 20, 30, 40, 50);

// //! Spread Operator
// const addNumbers = (x, y, z) => {
//   return x + y + z;
// };
// let numbersOne = [1, 2, 3];
// console.log(addNumbers(numbers[0], numbers[1], numbers[2], numbers[3]));
// console.log(addNumbers(...numbers));

// let numbers2 = [...numbers, 4, 5, 6];
// console.log(numbers2);
// let numbersTwo = [4, 5, 6];
// let numbersAdd = numbersOne.concat(numbersTwo);
// console.log(numbersAdd);
// let numbersSpreadMethod = [...numbersOne, ...numbersTwo];
// console.log(numbersSpreadMethod);

// let p1 = {
//   name: "Ashfak",
//   age: 30,
// };
// let p2 = {
//   nationality: "Bangladesh",
//   occupation: "student",
// };

// let p = { ...p1, ...p2 };
// console.log(p);

// //!Object Literals
// const studentInfo1 = (name, age) => {
//   return {
// // a : name,
// // b: age,
//     name,
//     age,
//   };
// };
// console.log(studentInfo1("Ashfak", 23));

// let message = {
//   body: function () {
//     return `Hi,Iam Object Function`;
//   },
// };
// let message2 = {
//   body() {
//     return `Hi,Iam Object Function Two`;
//   },
//   name: "Ashfak Mahbub",
// };
// const { body, name } = message2;
// console.log(body() + " " + name);

// //! for...of and for...in
// const names = ["s1","s2","s3"];
// for (const name of names){
//   console.log(name);
// }

// let students = {
//   name: "Ashfak Mahbub",
//   cgpa: 3.91,
// };

// for (let x in students) {
//   console.log(`${x} : ${students[x]}`);
// }

// //!For vs ForEach

// var numbers = [1, 2, 3, 4, 5, 6, 7];
// var squareNumbers = [];
// for (let i = 0; i <= numbers.length; i++) {
//   console.log(i);
// }

// numbers.forEach((x) => {
//   squareNumbers.push(x * x);
// });
// console.log(squareNumbers);

// let numbersArray = [4, 8, 12, 16, 20];
// numbersArray.forEach((x, index, array) => {
//   array[index] = x + 5;
// });
// console.log(numbersArray);

// let array = [1, 4, 7, 6, 2, 4, 5, 9];
// let sum = 0;
// array.forEach((x) => {
//   sum = x % 2 === 0 ? console.log("Even") : console.log("ODD");
// });

// //! Map && Filter

// let numbers = [1, 2, 3, 4, 5];
// let squareNumbers = numbers.map((number) => {
//   return number * number;
// });
// console.log(squareNumbers);

// let numbersTwo = [22, 10, 9, 12, 25];
// let newArray = numbersTwo.filter((number) => {
//   return number > 10;
// });
// console.log(newArray);

// //!Arrow Function wuth map && filter

// let student = [
//   {
//     name: "Ashfak",
//     age: 23,
//     cgpa: 3.41,
//   },
//   {
//     name: "Mahbub",
//     age: 23,
//     cgpa: 3.2,
//   },
//   {
//     name: "Mahi",
//     age: 25,
//     cgpa: 3.5,
//   },
//   {
//     name: "Rajin",
//     age: 21,
//     cgpa: 2.5,
//   },
//   {
//     name: "Sonia",
//     age: 20,
//     cgpa: 2.33,
//   },
// ];

// function studentName() {
//   return student
//     .filter((x) => {
//       return x.cgpa > 3;
//     })
//     .map((name) => {
//       return name.name;
//     });
// }
// console.log(studentName());

// !Destructuring
// Array destructure
// let numbers = [1, 2, 3, 4, 5];
// const [num1, num2, ...z] = numbers;
// console.log(z);

// //Swapping
// let a = 20,
//   b = 10;
// [a, b] = [b, a];
// console.log(a + " " + b);

// //Object Destructuring
// const studentInfo = {
//   id: 101,
//   fullName: "Ashfak Mahbub",
//   gpa: 3.97,
//   language: {
//     native: "English",
//     beginner: "Bangla",
//   },
// };
// const { id, fullName, language } = studentInfo;
// console.log(language.native);

// //function destructure
// const sInfo = ({ id, fullName, language }) => {
//   console.log(fullName);
// };
// sInfo(studentInfo);

// //! Array find() && find.index()

// //>find
// let numbers = [5, 55, 14, 5, 78];
// let firstEvenNumber = numbers.find((x) => x % 2 === 0);
// console.log(firstEvenNumber);

// //>findIndex
// let numbersTwo = [4, 5, 14, 23, 64, 18];
// let firstEvenNumberIndex = numbers.findIndex((x) => x % 2 === 0);
// console.log(firstEvenNumberIndex);

// //Both using
// const students = [
//   {
//     id: 100,
//     gpa: 2.34,
//   },
//   {
//     id: 101,
//     gpa: 3.34,
//   },
//   {
//     id: 102,
//     gpa: 4.54,
//   },
//   {
//     id: 103,
//     gpa: 5.0,
//   },
// ];

// const goodStudent = students.find((x) => x.gpa > 4);
// console.log(goodStudent);

// !String Method
const message = "Today feels cold";
console.log("Starts With : " + message.startsWith("Today"));

const message2 = "Today feels hot";
console.log("Ends With : " + message2.endsWith("hot"));

const message3 = "Today feels hot";
console.log("Includes With : " + message3.includes("today"));


