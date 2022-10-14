// var addTwoNumbers = function(l1, l2) {
    

//     for (let i = 0; i <=l1.length; i++){
//         let sum = l1[i];
//     }
//     for (let j = 0; j <= l2.length; j++){
//         console.log(l2[j] += sum)
//     }
//     return l1 + l2;

// };

// const result = addTwoNumbers([1,2,3],[3,5,6]);
// console.log(result);

// ? Slice

let str1 = "Mahi,Ashfak,Mahbub,Go There";
let sliceIt = str1.slice(1,7);
console.log(sliceIt);

let str = "Honda, Toyota, Suzuki";
let part = str.substring(5, 10);
console.log("Sub String is a part of a pizza slice" + part);

let str2 = "Toyota, Honda, Suzuki";
let part3 = str.substr(9, 8);
console.log(part3);