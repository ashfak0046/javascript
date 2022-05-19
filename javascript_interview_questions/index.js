// ! 1st Question:

// (function () {
//   var a = (b = 3);
// })();
// console.log(typeof a);
// console.log(typeof b);
// console.log("a defined?" + (typeof a !== "undefined")); /// * !== it true when its not equal to the conditions
// console.log("b defined?" + (typeof b !== "undefined"));

//! 2nd Question:

// var myObject = {
//   foo: "bar",
//   func: function () {
//     var self = this;
//     console.log("outer func : this.foo = " + this.foo);
//     console.log("outer func : self.foo = " + self.foo);
//     (function () {
//       console.log("inner func : this.foo = " + this.foo);
//       console.log("inner func : self.foo = " + self.foo);
//     })();
//   },
// };
// myObject.func();

//!3rd Question:
// function foo1()
//  {
//   return {
//     bar: "hello"
//   };
// }
// function foo2() {
//   return
//   {
//     bar: "hello"
//   };
// }
// console.log("foo1 returns:");
// console.log(foo1());
// console.log("foo2 returns:");
// console.log(foo2());

//! 4th Question:

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);

// function areTheNumberAlmostEqual(num1, num2) {
//   return Math.abs(num1 - num2) < Number.EPSILON;
// }
// console.log(areTheNumberAlmostEqual(0.1 + 0.3, 0.4));

//! 5th Question:

// (function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }, 1000);
//   setTimeout(function () {
//     console.log(3);
//   }, 0);
//   setInterval(function () {
//     console.log(7);
//   }, 2000);

//   console.log(4);
// })();

//!6th Question:
//? Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

// function isPalindrome(str){
//     str = str.replace(/[\W_]/g,'').toLowerCase();
//     return (str == str.split('').reverse().join(''));
// }
// console.log(isPalindrome("level"));
// console.log(isPalindrome("levels"));
// console.log(isPalindrome("a car, a man, a maraca"));

//! 7th Question:
//? Write a sum method which will work properly when invoked using either syntax below.

// ?* Method 1:
// function sum(x) {
//   if (arguments.length == 2) {
//     return arguments[0] + arguments[1];
//   } else {
//     return function (y) {
//       return x + y;
//     };
//   }
// }

// ?*Method:2
// function sum(x, y) {
//   if (y !== undefined) {
//     return x + y;
//   } else {
//     return function (y) {
//       return x + y;
//     };
//   }
// }
// console.log(sum(2, 3));
// console.log(sum(2)(3));

//!8th Question:
// ? (a) What gets logged to the console when the user clicks on “Button 4” and why?

// ? (b) Provide one or more alternate implementations that will work as expected.

// for (var i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', function(){ console.log(i); });
//     document.body.appendChild(btn);
//   }

// ?* Alternative Method:
//  for (var i = 0; i < 5; i++) {
//   var btn = document.createElement("button");
//   btn.appendChild(document.createTextNode("Button " + i));
//   btn.addEventListener(
//     "click",
//     (function (i) {
//       return function () {
//         console.log(i);
//       };
//     })(i)
//   );
//   document.body.appendChild(btn);
// }

// ?* Alternative Method:
// for (var i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     (function (i) {
//       btn.addEventListener('click', function() { console.log(i); });
//     })(i);
//     document.body.appendChild(btn);
//   }

// ?* Alternative Method :
// for (let i = 0; i < 5; i++) {
//   var btn = document.createElement("button");
//   btn.appendChild(document.createTextNode("Button " + i));
//   btn.addEventListener("click", function () {
//     console.log(i);
//   });
//   document.body.appendChild(btn);
// }

//!9th Question:
// var d = {};

// ["zebra", "horse"].forEach(function (k) {
//   d[k] = undefined;
// });
// console.log(d);

// !10th Question:
// var arr1 = "john".split("");
// var arr2 = arr1.reverse();
// var arr3 = "jones".split("");
// arr2.push(arr3);
// console.log(arr1);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
