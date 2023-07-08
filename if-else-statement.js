function checkGrade(marks) {
  if ((marks > 80) & (marks <= 100)) return "A";
  else if ((marks > 70) & (marks <= 80)) return "B";
  else if ((marks > 60) & (marks <= 70)) return "C";
  else if ((marks > 50) & (marks <= 60)) return "D";
  else if ((marks > 40) & (marks <= 50)) return "E";
  else if ((marks > 0) & (marks <= 40)) return "F";
  else return "invalid number";
}

console.log("your grade is ->", checkGrade(30));
console.log("your grade is ->", checkGrade(55));
console.log("your grade is ->", checkGrade(67));
console.log("your grade is ->", checkGrade(81));
console.log("your grade is ->", checkGrade(120));
