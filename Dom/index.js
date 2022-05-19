
// for(let i=0 ; i<=4;i++){
//     if(i%2 != 0){
//         const studentList = document.querySelector(".student-list");
//         const student = studentList.querySelectorAll("li")[i];
//         student.style.color = "blue";
//     }
// }

// const studentList = document.querySelector(".student-list");
// const studentA = studentList.children[0];
// console.log(studentA.innerHTML);

const studentB = document.querySelector(".student-b");
const studentList = studentB.parentElement;
const studentC = studentB.nextElementSibling;

studentList.removeChild(studentC);



// const myHeading = document.getElementById("head");
// myHeading.innerHTML = "Hello World!";
// document.querySelector("#head");
// var myDiv = document.getElementById("my-div");
// //   function myMessage() {
// //     document.getElementById("para").innerHTML = "You have click button";
// //   }

// document.getElementById("click").addEventListener("click", () => {
//   document.getElementById("para").innerHTML = "You have click button";
// });

// var heading3 = document.createElement("h1");
// var text = document.createTextNode("Tata");
// heading3.appendChild(text);

// myDiv.appendChild(heading3);

// var heading2 = document.getElementsByTagName("h1")[2];
// myDiv.removeChild(heading2);
// var heading1 = document.getElementsByTagName("h1")[1].classList.add("hidden");
// var heading0 = document.createElement("h1");
// var text = document.createTextNode("This is heading Zero");
// heading0.appendChild(text);
// myDiv.insertBefore(heading0, heading1);

