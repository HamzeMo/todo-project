let Name = prompt('please enter your name');
if(Name){
    
    alert('Hello '+ Name)
    console.log(Name);
}

const Gender = prompt( 'male or female'  );


// //switch(Gender){
//     case 'male':
        
//         console.log("male");
//         break;
//     case 'Male':
//         console.log("Male");
//         break;
//     case 'female':
//         console.log("female");
//         break;
//      case 'Female':
//             console.log("Female");
//             break;    
//     default:
//         console.log('invalid');
// }
const age = prompt('Enter Your age please  ');

if(age > 0)  {
    console.log(age);
}
else   { 
    alert("the age is wrong")
    console.log('invalid');

}

let user = confirm('You want to skip the welcoming message ?  ');


if (user == false && Gender == "male" )   {
    
        alert ("Hello MS  "    + Name)
}
    else if (user == false && Gender == "female"){
        
        alert ("Hello MR  "   + Name)
        console.log("Welcome ");
    }
    
 if (user == true)  {
   

    console.log('No welcome');

}




var answer1 = prompt("Question 1: Do you like ice cream? (YES/NO)");
var answer2 = prompt("Question 2: Is Our Restaurant your favorite Restaurants? (YES/NO)");
var answer3 = prompt("Question 3: Have you been to Georgia? (YES/NO)");


var validOptions = ["YES", "NO"];
var isValid = true;

if (!validOptions.includes(answer1)) {
   
  isValid = false;
  
}
console.log(answer1);
if (!validOptions.includes(answer2)) {
    
  isValid = false;
  
}
console.log(answer2);
if (!validOptions.includes(answer3)) {
    
  isValid = false;
  
}
console.log(answer3);

if (!isValid) {
  alert("Invalid input detected. Please provide answers as 'YES' or 'NO'.");
}