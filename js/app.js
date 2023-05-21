let Name = prompt("please enter your name");
let gender = prompt("(male or female)");
let age = prompt("Enter Your age please");

if (parseInt(age) <= 0) {
  alert("Invalid age. Please enter a valid age ");
}

let SkipWelcome = confirm("Do you want to skip the welcoming message?");

if (!SkipWelcome) {
  let title = "";
  if (gender.toLowerCase() === "male") {
    title = "Mr";
  } else if (gender.toLowerCase() === "female") {
    title = "Ms";
  }
  if (title === "") {
    alert("Welcome, " + Name + "!");
  } else {
    alert("Welcome, " + title + " " + Name + "!");
  }
}
let answers = [];

function askQuestion(question) {
  let answer = prompt(question);
  if (answer.trim() === "") {
    answer = "invalid";
  }
  answers.push(answer);
}

askQuestion("Question 1: Do you like ice cream? (YES/NO)");
askQuestion("Question 2: Is Our Restaurant your favorite Restaurants? (YES/NO)");
askQuestion("Question 3: Have you been to Georgia? (YES/NO)");

console.log("User answers:", answers);
