// //Digit Spelling

// // var digit = prompt("Enter any digit : ");

// // switch (digit) {
// //   case 0:
// //     console.log("Zero");
// //     break;
// //   case 1:
// //     console.log("One");
// // }

// // if (digit == 0) console.log("Zero");
// // else if (digit == 1) console.log("One");
// // else if (digit == 2) console.log("Two");
// // else if (digit == 3) console.log("Three");
// // else if (digit == 4) console.log("Four");
// // else if (digit == 5) console.log("Five");
// // else if (digit == 6) console.log("Six");
// // else if (digit == 7) console.log("Seven");
// // else if (digit == 8) console.log("Eight");
// // else if (digit == 9) console.log("Nine");
// // else console.log("Its not a digit");

// var i = 0;
// while (i <= 5) {
//   document.write(`<h3>${i}</h3>`);
//   i++;
// }
// //////////////////////////////////

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     document.write(`<h3>${i}</h3>`);
//   }
// }
// ////////// //////////////////////////////////
// function EvenNumber(a) {
//   for (let i = 0; i < a; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
//   return a;
// }
// EvenNumber(10);

//////////// ///////////////////////
// const name = "Ashfak";
// document.write(name.split(''));

function FindName(a) {
  a.split('');
  for (let i = 0; i < a.length; i++) {
    if (a.charAt(1) === "s") {
      console.log("S is found");
      break;
    } else {
      console.log("There is no s");
      break;
    }
  }
  return a;
}
FindName("Ashfak Mahbub");
