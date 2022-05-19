class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  set studentName(name) {
    this.name = name;
  }
  get studentInfo() {
    return this.id + " " + this.name;
  }
}

let s1 = new Student(101, "Ashfak");
console.log(s1);
s1.studentName = "Mahbub";
console.log(s1);
console.log(s1.studentInfo);