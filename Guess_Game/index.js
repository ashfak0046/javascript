

var numberWon = 0;
var numberLost = 0;

for (let i = 0; i <= 5; i++) {
  var guessNumber = parseInt(prompt("Enter a Number from 1 to 5: "));
  var randomNumber = Math.floor(Math.random() * 5) + 1;
  if (guessNumber == randomNumber) {
    console.log("You Have Won");
    numberWon++;
  } else {
    console.log("You have lost. Random number was 4" + randomNumber);
    numberLost++;
  }

}
document.write("Number of won = " + numberWon + "<br/>");
document.write("Number of lost = " + numberLost+ "<br/>");
