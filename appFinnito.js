"use strict"

// function app(people){
//   let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();// prevent breaking by user input
//   switch(searchType){
//     case 'yes':
//       searchByName();
//     break;
//     case 'no':
//     // TODO: search by traits
//     break;
//     default:
//     app(people); // restart app
//     break;
//   }
// }


function gender() {
	let genderPrompt = promptFor("What gender? Enter 'male' or 'female'", yesNo).toLowerCase()
		while(!== Male || !== Female ) {
}
}
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}


function traitFinder(){
let = 
	height = ""
	weight = 
	occupation = 
	eyeColor =
	
}

userInputArray = [];

function inputFinder() {
	 let Height = promptFor("How tall is he/she? \"yes\", \"no\"" yesNo).toLowerCase(); 
	 	if (true)
	 		
	let Weight = promptFor("How much does he/she weigh?\"yes\", \"no\"", yesNo).toLowerCase();
	let Gender = promptFor("How much does he/she weigh?\"yes\", \"no\"", yesNo).toLowerCase();
	let occupation = promptFor("How much does he/she weigh?\"yes\", \"no\"", yesNo).toLowerCase();
	let eyeColor = promptFor("How much does he/she weigh?\"yes\", \"no\"", yesNo).toLowerCase();
}