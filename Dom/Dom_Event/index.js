console.clear();
const Div = document.querySelector("div");
Div.addEventListener("click", (e) => {
  //   console.log("click");
  console.log(e.target);
});
Div.addEventListener("dblclick", () => {
  //   console.log("dbclick");
});
Div.addEventListener("mousedown", () => {
  //   console.log("mousedown");
});
Div.addEventListener("mouseup", () => {
  //   console.log("mouseup");
});
Div.addEventListener("mouseover", () => {
  //   console.log("mouseover");
});

Div.addEventListener("mousemove", (e) => {
  //   console.log("mousemove");
  //   console.log("clientX = " + e.clientX + "," + " clientY = " + e.clientY);
  //   console.log("clientX = " + e.clientX + "," + " clientY = " + e.clientY);
});

const fruits = document.querySelectorAll("li");
Array.from(fruits).map((fruits) => {
  if (fruits.textContent == "Mango") {
    fruits.style.color = "tomato";
  } else if (fruits.textContent == "Lemon") {
    fruits.style.color = "cyan";
  }
});
