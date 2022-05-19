console.clear();
const textArea = document.querySelector("textarea");
textArea.addEventListener("keydown", (e) => {
  if (e.repeat) {
    alert("do not repeat");
  }
});
textArea.addEventListener("keypress", () => {
  //   console.log("keypress");
});
textArea.addEventListener("keyup", (e) => {
  //   console.log(e.key);
});
