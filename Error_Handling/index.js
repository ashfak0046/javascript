// try {
//   alert("Hi everyone");
//   alert("Bye everyone");
// } catch (err) {
//   alert("Something everyone");
// }
console.clear();
const checkButton = document.querySelector("#checkButton");

checkButton.addEventListener("click", () => {
  const textField = document.querySelector("#numTextField");
  console.log(textField.value);
  try {
    if (textField.value < 5) {
      throw "input is to low";
    } else if (textField.value > 10) {
      throw "input is to high";
    }
  } catch (err) {
    console.log(err);
  }
});
