/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let filteredPeople = []
  let searchType = promptFor("Do you know the first name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      searchByFirstName();
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
  filteredPeople = searchByLastName(filteredPeople);
  filteredPeople = inputHeightFinder(filteredPeople);
  filteredPeople = inputWeightFinder(filteredPeople);
  filteredPeople = inputGenderFinder(filteredPeople);
  filteredPeople = inputOccupationFinder(filteredPeople);
  filteredPeople = inputEyeColorFinder(filteredPeople);
  mainMenu(filteredPeople);
}
function inputHeightFinder() {
   let searchType = promptFor("Do you know how tall he/she is? \"yes\", \"no\"", yesNo).toLowerCase(); 
    switch (searchType) {
      case 'yes':
        searchByHeight();
        break;
      case 'no' :
        break;
    }
    return;
}
function inputWeightFinder() {
    let searchType = promptFor("Do you know how much he/she weighs? \"yes\", \"no\"", yesNo).toLowerCase();
      switch(searchType) {
        case 'yes':
          searchByWeight();
          break;
        case 'no' :
          break;
    }
    return;
}
function inputGenderFinder() {
    let searchType = promptFor("Do you know what gender he/she is? \"yes\", \"no\"", yesNo).toLowerCase();
      switch(searchType) {
        case 'yes':
          searchByGender();
          break;
        case 'no' :
          break;
    }
    return;
}
function inputOccupationFinder() {
    let searchType = promptFor("Do you know what he/she does as his/her occupation? \"yes\", \"no\"", yesNo).toLowerCase();
      switch(searchType) {
        case 'yes':
          searchByOccupation();
          break;
        case 'no' :
          break;

    }
    return;
}
function inputEyeColorFinder() {
    let searchType = promptFor("Do you know what color eye's he/she has? \"yes\", \"no\"", yesNo).toLowerCase();
      switch(searchType) {
        case 'yes':
          searchByEyeColor();
          break;
        case 'no' :
        break;
    }
    return;
}


function searchByFirstName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  let filteredPeople = data.filter( function(person){
    if( person.firstName == firstName){ 
    return true; }
   else { 
  return false; 
}

return filteredPeople;
}); 
console.log(filteredPeople);
}
function searchByLastName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  firstName = lastName.charAt(0).toUpperCase() + firstName.slice(1);
  let filteredPeople = data.filter( function(person){
    if( person.lastName == lastName){ 
    return true; }
   else { 
  return false; 
}

return filteredPeople;
}); 
console.log(filteredPeople);
}

function searchByHeight(people) {
  let height = promptFor("How tall is he/she? Enter in inches, and only as numbers.", chars);
  let filteredPeople = data.filter( function(person){
    if( person.height == height){ 
    return true; }
   else { 
  return false; 
}

return filteredPeople;
}); 
console.log(filteredPeople);
}
function searchByWeight(people) {
  let weight = promptFor("How much does he/she weight? Enter in pounds, and only as numbers", chars);
  let filteredPeople = data.filter( function(person){
    if( person.weight == weight){ 
    return true; }
   else { 
  return false; 
}

return filteredPeople;
}); 
console.log(filteredPeople);
}
function searchByGender(people) {
  let gender = promptFor("What gender is he/she?", chars);
  let filteredPeople = data.filter( function(person){
    if( person.gender == gender){ 
    return true; }
   else { 
  return false; 
}

return filteredPeople;
}); 
console.log(filteredPeople);
}
function searchByOccupation(people) {
  let occupation = promptFor("What does he/she do for his/her/ occupation?", chars);
  let filteredPeople = data.filter( function(person){
    if( person.occupation == occupation){ 
    return true; }
   else { 
  return false; 
}

return filteredPeople;
}); 
console.log(filteredPeople);
}
function searchByEyeColor(people) {
  let eyeColor = promptFor("what color eyes does he/she have?", char);
  let filteredPeople = data.filter( function(person){
    if( person.eyeColor == eyeColor){ 
    return true; }
   else { 
  return false; 
}

return filteredPeople;
}); 
console.log(filteredPeople);
}





// function findHeight()
// function findWeight()
// function findGender()
// function findOccupation()
// function findEyeColor()

// function wantedGenerator(){
//   let character = {
//     this.Height = Height;
//     this.Weight = Weight;
//     this.Gender = Gender;
//     this.Occupation = Occupation;
//     this.eyeColor = eyeColor;
//   }
//}

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
      displayPeople(filteredPeople);
    break;
    case "family":
      familyInfo(filteredPeople);
    break;
    case "descendants":
      descendantsInfo(filteredPeople);
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

function familyInfo(people) {
  
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
