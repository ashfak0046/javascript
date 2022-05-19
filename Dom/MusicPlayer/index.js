var count = 0;
document.querySelector("textarea").addEventListener("keypress", (e) => {
  count++;
  var text = e.key;
  document.querySelector("p").innerHTML = "You have pressed " + count;
});

// for (let i = 0; i < 3; i++) {
//   const Buttons = document.querySelectorAll(".my-button")[i];
//   Buttons.addEventListener("click", () => {
//     var text = Buttons.innerHTML;
//     console.log(text);

//     audioPlay(text);
//     playAnimation(text);
//   });
// }

// document.addEventListener("keypress", (e) => {
//   var text = e.key;
//   audioPlay(text);
//   playAnimation(text);
// });

// const audioPlay = (text) => {
//   switch (text) {
//     case "a":
//       var audio = new Audio(
//         "./music/01-Besabriyaan-M.S._Dhoni_FusionBD.Com.mp3"
//       );
//       audio.play();
//       break;
//     case "b":
//       var audio = new Audio("./music/02-Azhar-Itni_Si_Baat_FusionBD.Com.mp3");
//       audio.play();
//       break;
//     case "c":
//       var audio = new Audio("./music/02.Heropanti-Rabba.mp3");
//       audio.play();
//       break;
//   }
// };

// function playAnimation(text) {
//   var selectedButton = document.querySelector("." + text);
//   selectedButton.classList.add("anim");
//   setTimeout(function () {
//     selectedButton.classList.remove("anim");
//   }, 1000);
// }
