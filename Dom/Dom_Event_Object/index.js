//! load unload toggle resize

window.addEventListener("load", () => {
  console.log("load");
});
window.addEventListener("unload", () => {
  console.log("unload");
});

window.addEventListener("scroll", () => {
  console.log("scroll");
});

window.addEventListener("resize", () => {
  const width = window.outerWidth;
  const height = window.outerHeight;
  console.log(`height: ${height}, width: ${width}`);
});

const details = document.querySelector("details");
details.addEventListener('toggle',(e) => {
        console.log(e.target.open);
})
////! /////

// ! Video Event

// const video = document.querySelector("video");

// video.addEventListener('canplay', () => {
//       console.log('can play');
// })
// video.addEventListener('play', () => {
//       console.log('play');
// })
///! ////

// *Get Data from form

// const form = document.querySelector("form");
// const name = form.querySelector("div #name");
// const email = form.querySelector("div #email");
// const password = form.querySelector("div #password");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(name.value);
//   console.log(email.value);
//   console.log(password.value);

//   const userInfo = {
//     name: name.value,
//     email: email.value,
//     password: password.value,
//   };
//   console.log(userInfo);
//   name.value = "";
//   email.value = "";
//   password.value = "";
// });

// ? //////////

// const depName = document.querySelector("#department");
// console.log(depName);

// depName.addEventListener('change',(e) => {
//         console.log(e.target.value);
// })

// const programs = document.querySelectorAll("input[name=program]");
// // console.log(programs);

// Array.from(programs).map((program) => {
//   program.addEventListener("click", programHandler);
// });

// function programHandler(e) {
//     if(e.target.checked){
//         console.log(e.target.value);
//     }

// }

// const input = document.querySelector("input");

// input.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });
