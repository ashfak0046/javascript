// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a === 2) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });
// p.then((message) => {
//   console.log("This is in the then : " + message);
// }).catch((error) => {
//   console.log("This is in the catch : " + error);
// });

//! Using Callback function

// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "User left",
//       message: ":(",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: " User watching cat meme",
//       message: "Ashfak Mahbub < Cat",
//     });
//   } else {
//     callback("Hi There");
//   }
// }

// watchTutorialCallback(
//   (message) => {
//     console.log("Success: " + message);
//   },
//   (error) => {
//     console.log(error.name + ": " + error.message);
//   }
// );

//? Replacing Callback Function with Promises

const userLeft = true;
const userWatchingCatMeme = false;

let checkIt = new Promise((resolve, reject) => {
  if (userLeft) {
    resolve({
      name: "User left",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    resolve({
      name: " User watching cat meme",
      message: "Ashfak Mahbub < Cat",
    });
  } else {
    reject("Hi there");
  }
});
checkIt
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
