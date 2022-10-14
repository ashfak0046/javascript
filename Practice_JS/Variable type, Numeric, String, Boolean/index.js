//? Removing duplicate using Set libary

// var arrayRemoveDuplicate = ["mahi","ashfak","mahbub","mahi"];
// var unique = [...new Set(arrayRemoveDuplicate)];
// console.log(unique);

function checkWhoisGreater(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
document.querySelector('p').innerHTML = "B is greater = "  +  checkWhoisGreater(4, 6) 
// const checkResult = ;
// console.log(checkResult);

const car = {
  name : "Nisan",
  model: 54963,
  color: "white",
  start: function(){
    return this.name + " " + this.model;
  }
}

document.querySelector('#demo').innerHTML =car.start();
//* return statement return the value to the caller. For example, when we define a value of X function in a variable and return the function. That's mean the function value is stored in the variable if you console the value of the variable you will see the output of the function.
