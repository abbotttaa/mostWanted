/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let filteredPeople = []
  let searchType = promptFor("This is the Most Wanted database.  We will now ask you some questions to narrow down to one person. You'll need to narrow it down to one person.  Enter 'yes' or 'no' if you understand and are ready to start", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      inputFinder(filteredPeople);
    break;
    case 'no':
      app(people);
    break;
    default:
    app(people); // restart app
    break;
  }
}

function inputFinder(filteredPeople) {
  filteredPeople = inputFirstNameFinder(filteredPeople);
  filteredPeople = inputLastNameFinder(filteredPeople);
  filteredPeople = inputHeightFinder(filteredPeople);
  filteredPeople = inputWeightFinder(filteredPeople);
  filteredPeople = inputGenderFinder(filteredPeople);
  filteredPeople = inputOccupationFinder(filteredPeople);
  filteredPeople = inputEyeColorFinder(filteredPeople);
  filteredPeople = inputAgeFinder(filteredPeople)
	if (filteredPeople.length !== 1) {
   		alert("Search has been narrowed down to more or less than one person, we'll need to try again")
   		inputFinder(filteredPeople)
   		}
   	else {
   			mainMenu(filteredPeople);
   	}
  
}
function inputFirstNameFinder(filteredPeople){
  let searchType = promptFor("Do you know the first name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
    switch (searchType) {
      case 'yes':
       filteredPeople = searchByfirstName(filteredPeople);
        break;
      case 'no' :
        break;
    }
    return filteredPeople;
}
function inputLastNameFinder(filteredPeople){
  let searchType = promptFor("Do you know the last name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
    switch (searchType) {
      case 'yes':
       filteredPeople = searchByLastName(filteredPeople);
        break;
      case 'no' :
        break;
    }
    return filteredPeople;
}
function inputHeightFinder(filteredPeople) {
   let searchType = promptFor("Do you know how tall he/she is? \"yes\", \"no\"", yesNo).toLowerCase(); 
    switch (searchType) {
      case 'yes':
        filteredPeople = searchByHeight(filteredPeople);
        break;
      case 'no' :
        break;
    }
    return filteredPeople;
}
function inputWeightFinder(filteredPeople) {
    let searchType = promptFor("Do you know how much he/she weighs? \"yes\", \"no\"", yesNo).toLowerCase();
      switch(searchType) {
        case 'yes':
          filteredPeople = searchByWeight(filteredPeople);
          break;
        case 'no' :
          break;
    }
    return filteredPeople;
}
function inputGenderFinder(filteredPeople) {
    let searchType = promptFor("Do you know what gender he/she is? \"yes\", \"no\"", yesNo).toLowerCase();
      switch(searchType) {
        case 'yes':
          searchByGender(filteredPeople);
          break;
        case 'no' :
          break;
    }
    return filteredPeople;
}
function inputOccupationFinder(filteredPeople) {
    let searchType = promptFor("Do you know what he/she does as his/her occupation? \"yes\", \"no\"", yesNo).toLowerCase();
      switch(searchType) {
        case 'yes':
          filteredPeople = searchByOccupation(filteredPeople);
          break;
        case 'no' :
          break;

    }
    return filteredPeople;
}
function inputEyeColorFinder(filteredPeople) {
    let searchType = promptFor("Do you know what color eye's he/she has? \"yes\", \"no\"", yesNo).toLowerCase();
      switch(searchType) {
        case 'yes':
          filteredPeople = searchByEyeColor(filteredPeople);
          break;
        case 'no' :
        break;
    }
    return filteredPeople;
}
function inputAgeFinder(filteredPeople){
  let searchType = promptFor("Do you know how old he/she is? Enter 'yes' or 'no'", yesNo).toLowerCase();
    switch (searchType) {
      case 'yes':
       filteredPeople = searchByAge(filteredPeople);
        break;
      case 'no' :
        break;
    }
    return filteredPeople;
}

function searchByFirstName(filteredPeople){
  let firstName = promptFor("What is the person's last name?", chars);
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  if (filteredPeople.length > 0){
      filteredPeople = filteredPeople.filter( function(person){
    if( person.firstName == firstName){ 
    return true; }
   else { 
  return false; 
}
}); 
   return filteredPeople;
  }
  else {
  filteredPeople = data.filter( function(person){
    if( person.firstName == firstName){ 
    return true; }
   else { 
  return false; 
}
// return filteredPeople;
}); 
console.log(filteredPeople);
  return filteredPeople;
}
}
function searchByLastName(filteredPeople){
  let lastName = promptFor("What is the person's last name?", chars);
  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  if (filteredPeople.length > 0){
      filteredPeople = filteredPeople.filter( function(person){
    if( person.lastName == lastName){ 
    return true; }
   else { 
  return false; 
}
}); 
   return filteredPeople;
  }
  else {
  filteredPeople = data.filter( function(person){
    if( person.lastName == lastName){ 
    return true; }
   else { 
  return false; 
}
// return filteredPeople;
}); 
console.log(filteredPeople);
  return filteredPeople;
}
}
function searchByHeight(filteredPeople) {
  let height = promptFor("How tall is he/she? Enter in inches, and only as numbers.", chars);
    if (filteredPeople.length > 0){
      filteredPeople = filteredPeople.filter( function(person){
    if( person.height == height){ 
    return true; }
   else { 
  return false; 
}
}); 
   return filteredPeople;
  }
  else {
  filteredPeople = data.filter( function(person){

    if( person.height == height){ 
    return true; }
   else { 
  return false; 
}

// return filteredPeople;
}); 
console.log(filteredPeople);
return filteredPeople;
}
}
function searchByWeight(filteredPeople) {
  let weight = promptFor("How much does he/she weight? Enter in pounds, and only as numbers", chars);
    if (filteredPeople.length > 0){
      filteredPeople = filteredPeople.filter( function(person){
    if( person.weight == weight){ 
    return true; }
   else { 
  return false; 
}
}); 
   return filteredPeople;
  }
  else {
  filteredPeople = data.filter( function(person){
    if( person.weight == weight){ 
    return true; }
   else { 
  return false; 
}
}); 
console.log(filteredPeople);
return filteredPeople;
}
}
function searchByGender(filteredPeople) {
  let gender = promptFor("What gender is he/she?", chars);
    if (filteredPeople.length > 0){
      filteredPeople = filteredPeople.filter( function(person){
    if( person.gender == gender){ 
    return true; }
   else { 
  return false; 
}
}); 
   return filteredPeople;
  }
  else {
  filteredPeople = data.filter( function(person){
    if( person.gender == gender){ 
    return true; }
   else { 
  return false; 
}
return filteredPeople;
}); 
console.log(filteredPeople);
return filteredPeople;
}
}
function searchByOccupation(filteredPeople) {
  let occupation = promptFor("What does he/she do for his/her/ occupation?", chars);
    if (filteredPeople.length > 0){
      filteredPeople = filteredPeople.filter( function(person){
    if( person.occupation == occupation){ 
    return true; }
   else { 
  return false; 
}
}); 
   return filteredPeople;
  }
  else {
  filteredPeople = data.filter( function(person){
    if( person.occupation == occupation){ 
    return true; }
   else { 
  return false; 
}

return filteredPeople;
}); 
console.log(filteredPeople);
return filteredPeople;
}
}
function searchByEyeColor(filteredPeople) {
  let eyeColor = promptFor("what color eyes does he/she have?", char);
    if (filteredPeople.length > 0){
      filteredPeople = filteredPeople.filter( function(person){
    if( person.eyeColor == eyeColor){ 
    return true; }
   else { 
  return false; 
}
}); 
   return filteredPeople;
  }
  else {
  filteredPeople = data.filter( function(person){
    if( person.eyeColor == eyeColor){ 
    return true; }
   else { 
  return false; 
}

return filteredPeople;
}); 
console.log(filteredPeople);
return filteredPeople;
}
}
function searchByAge(filteredPeople){
 let ageInYears = promptFor("What is his/her age? Enter only numbers", chars);
 //let calcAge = filterDoBintoYearValue(data);
     if (filteredPeople.length > 0){
     filteredPeople = filteredPeople.filter( function(person){
       if( filterDoBintoYearValue(person) == ageInYears){
   return true; }
  else {
 return false; 
}
});
  return filteredPeople;
 }
 else {
 filteredPeople = data.filter( function(person){

   if( filterDoBintoYearValue(person) == ageInYears){
   return true; }
  else {
 return false;
 }

// return filteredPeople;
}); 
console.log(filteredPeople);
return filteredPeople;
}
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

function filterDoBintoYearValue(person) {
let date1 = new Date();
let date2 = new Date(person.dob); // person on filter DoB
let timeComb = Math.abs(date1.getTime()) + Math.abs(date2.getTime());
let diffDays = (timeComb / (1000 * 3600 * 24)); 
let diffYears = Math.floor(diffDays / 365.25)
return diffYears;
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
