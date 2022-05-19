const input = document.querySelector("input");
input.addEventListener("blur", () => {
  console.log("blur");
  input.style = "none";

});
input.addEventListener("focus", () => {
  //   console.log("focus");
  input.style.backgroundColor = "orange";
  input.style.padding = "2rem";
});
input.addEventListener("focusin", () => {
  //   console.log("focusin");
});
input.addEventListener("focusout", () => {
    // console.log("focusout");
    
});
