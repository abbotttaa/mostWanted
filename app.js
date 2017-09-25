/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let userInputArray = []
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();// prevent breaking by user input
  switch(searchType){
    case 'yes':
      searchByName();
    break;
    case 'no':
      inputFinder();
    break;
    default:
    app(people); // restart app
    break;
  }
}

function inputFinder() {
   let Height = promptFor("How tall is he/she? \"yes\", \"no\"" yesNo).toLowerCase(); 
    switch (Height) {
      case 'yes':

    }
      
  let Weight = promptFor("How much does he/she weigh?\"yes\", \"no\"", yesNo).toLowerCase();
  let Gender = promptFor("How much does he/she weigh?\"yes\", \"no\"", yesNo).toLowerCase();
  let occupation = promptFor("How much does he/she weigh?\"yes\", \"no\"", yesNo).toLowerCase();
  let eyeColor = promptFor("How much does he/she weigh?\"yes\", \"no\"", yesNo).toLowerCase();
    }
}

function findHeight()

function findWeight()
function findGender()
function findOccupation()
function findEyeColor()

function wantedGenerator(){
let character = {
  this.Height = Height;
  this.Weight = Weight;
  this.Gender = Gender;
  this.Occupation = Occupation;
  this.eyeColor = eyeColor;
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  // TODO: find the person using the name they entered

}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no" || input.toLowerCase() == "i don't know";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
