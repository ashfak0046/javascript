function Student(name, age, cgpa, programmingLanguage) {
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.programmingLanguage = programmingLanguage;
  this.display = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.programmingLanguage);
  };
}

var student1 = new Student("Ashfak Mahbub Mahi", 23, 3.41, [
  "C",
  "C++",
  "Java",
  "JavaScript",
]);

student1.display();
const { name, age, cgpa, programmingLanguage } = student1;

document.write(`<h2>${name}</h2>
<p style = "color: green">${programmingLanguage[3]}</p>
`);
// var student1 = {
//   name: "Ashfak Mahbub Mahi",
//   age: 23,
//   cgpa: 3.41,
//   programmingLanguage: ["C", "C++", "Java", "JavaScript"],
// };
