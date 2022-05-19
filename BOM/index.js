console.clear();
// // console.log(window.location);

// // console.log(window)
// alert("error here");
// confirm("Are you sure");

// function deleteSomething() {
//   let value = confirm("Are you sure?");
//   if (value) {
//     console.log("item is deleted");
//   } else {
//     console.log("not deleted");
//   }
// }
// deleteSomething();
// (function welcomeMessage() {
//   let h1 = document.createElement("h1");
//   var name = prompt("Enter Your Name: ");
//   let text;
//   if (name == null || name == "") {
//     text = "no name found";
//   } else {
//     text = name;
//   }
//   let textNode = document.createTextNode(text);
//   h1.appendChild(textNode);
//   document.body.appendChild(h1);
// })();

////*  setTimeout && setInterval  ////

// setTimeout(() => {
//   console.log("hi");
// }, 2000);

// setTimeout(display, 2000);

// function display() {
//   console.log("display function");
// }

const saveBtn = document.querySelector(".save-btn");
const message = document.querySelector("p");

// saveBtn.addEventListener("click", () => {
//   message.textContent = "user registration successful";
// });
// setTimeout(() => {
//   message.textContent = " ";
// }, 2000);

//?setInterval
// saveBtn.addEventListener("click", () => {
//   let count = 1;
//   message.textContent = count;

//   setInterval(() => {
//     count++;
//     message.textContent = count;
//   }, 1000);
// });

saveBtn.addEventListener("click", startClock);
function startClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  minutes = formatTime(minutes);
  seconds = formatTime(seconds);
  let time = hours + ":" + minutes + ":" + seconds;
  message.textContent = time;
  setInterval(startClock, 1000);
}

function formatTime(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
