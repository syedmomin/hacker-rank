let randomNumber = Math.floor(Math.random() * 9);

let result = prompt("Enter any number 1 to 10");
if (randomNumber == result) {
  alert("Congratulation You Win..🎉");
} else if (randomNumber > result) {
  alert("Try Again, near greater then ->", randomNumber);
} else if (randomNumber < result) {
  alert("Try Again,  near greater then ->", randomNumber);
} else {
  alert("Invalid Response");
}
