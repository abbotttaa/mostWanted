"use strict"

function app(people){
  let filteredPeople = [];
  let searchType = promptFor("This is the Most Wanted database.  We will now ask you some questions to narrow down to one person. You'll need to narrow it down to one person.  Enter 'yes' or 'no' if you understand and are ready to start", yesNo).toLowerCase();
    switch(searchType){
      case 'yes':
        inputFinder(filteredPeople, people);
          break;
      case 'no':
        app(people);
          break;
      default:
        app(people);
          break;
    }
}
function inputFinder(filteredPeople, allPeople) {
  filteredPeople = inputFirstNameFinder(filteredPeople);
  filteredPeople = inputLastNameFinder(filteredPeople);
  filteredPeople = inputHeightFinder(filteredPeople);
  filteredPeople = inputWeightFinder(filteredPeople);
  filteredPeople = inputGenderFinder(filteredPeople);
  filteredPeople = inputOccupationFinder(filteredPeople);
  filteredPeople = inputEyeColorFinder(filteredPeople);
  filteredPeople = inputAgeFinder(filteredPeople);
  
    if (filteredPeople.length !== 1) {
      alert("Search has been narrowed down to more or less than one person, we'll need to try again.")
      inputFinder(filteredPeople);
    }
    else {
      mainMenu(filteredPeople[0], filteredPeople[0], filteredPeople[0]);
    }
}
function inputFirstNameFinder(filteredPeople){
  let searchType = promptFor("Do you know the first name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
    switch (searchType) {
      case 'yes':
        filteredPeople = searchByFirstName(filteredPeople);
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
  let searchType = promptFor("Do you know how tall he/she is? Enter 'yes' or 'no'", yesNo).toLowerCase();   
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
  let searchType = promptFor("Do you know how much he/she weighs? 'yes' or 'no'", yesNo).toLowerCase();
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
  let searchType = promptFor("Do you know what gender he/she is? Enter'yes' or 'no'", yesNo).toLowerCase();
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
  let searchType = promptFor("Do you know what he/she does as his/her occupation? Enter 'yes' or 'no'", yesNo).toLowerCase(); 
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
  let searchType = promptFor("Do you know what color eye's he/she has? Enter 'yes or 'no'", yesNo).toLowerCase();
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
let firstName = promptFor("What's his/her first name?", chars);
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  if (filteredPeople.length > 0){
    filteredPeople = filteredPeople.filter( function(person){
      if( person.firstName == firstName){ 
        return true; 
      }
      else { 
        return false; 
      }
    }); 
  return filteredPeople;
  }
  else {
    filteredPeople = data.filter( function(person){
      if( person.firstName == firstName){ 
        return true; 
      }
      else { 
        return false; 
      }
    }); 
    console.log(filteredPeople);
    return filteredPeople;
  }
}
function searchByLastName(filteredPeople){
  let lastName = promptFor("What's his/her last name?", chars);
  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    if (filteredPeople.length > 0){
      filteredPeople = filteredPeople.filter( function(person){
        if( person.lastName == lastName){ 
          return true; 
        }
        else { 
          return false; 
        }
      }); 
      return filteredPeople;
    }
    else {
      filteredPeople = data.filter( function(person){
        if( person.lastName == lastName){ 
          return true; 
        }
        else { 
          return false; 
        }
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
          return true; 
        }
        else { 
          return false; 
        }
      }); 
      return filteredPeople;
    }
    else {
      filteredPeople = data.filter( function(person){
        if( person.height == height){ 
          return true; 
        }
        else { 
          return false; 
        }
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
          return true; 
        }
        else { 
          return false; 
        }
      }); 
      return filteredPeople;
    }
    else {
      filteredPeople = data.filter( function(person){
        if( person.weight == weight){ 
          return true; 
        }
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
          return true; 
        }
        else { 
          return false; 
        }
      }); 
      return filteredPeople;
    }
    else {
      filteredPeople = data.filter( function(person){
        if( person.gender == gender){ 
          return true; 
        }
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
  let occupation = promptFor("What does he/she do for his/her occupation?", chars);
    if (filteredPeople.length > 0){
      filteredPeople = filteredPeople.filter( function(person){
        if( person.occupation == occupation){ 
          return true; 
        }
        else { 
          return false; 
        }
      }); 
      return filteredPeople;
    }
    else {
      filteredPeople = data.filter( function(person){
        if( person.occupation == occupation){ 
          return true; 
        }
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
  let eyeColor = promptFor("What color eyes does he/she have?", chars);   
    if (filteredPeople.length > 0){
      filteredPeople = filteredPeople.filter( function(person){
        if( person.eyeColor == eyeColor){ 
          return true; 
        }
        else { 
          return false; 
        }
      }); 
      return filteredPeople;
    }
    else {
      filteredPeople = data.filter( function(person){
        if( person.eyeColor == eyeColor){ 
          return true; 
        }
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
  let ageInYears = promptFor("What's his/her age? Enter only numbers", chars);
  ageInYears = parseInt(ageInYears);
    if (filteredPeople.length > 0){
      filteredPeople = filteredPeople.filter( function(person){
        if( filterDoBintoYearValue(person) == ageInYears){
          return true; 
        }
        else {
          return false; 
        }
      });
      return filteredPeople;
    }
    else {
      filteredPeople = data.filter( function(person){
        if( filterDoBintoYearValue(person) == ageInYears){
          return true; 
        }
        else {
          return false;
        }
      }); 
      console.log(filteredPeople);
      return filteredPeople;
    }
}

function mainMenu(person, people, filteredPeople){
  if(!person){
    alert("Could not find that individual.");
      return app(people);
  }
  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
    switch(displayOption){
      case "info":
        alert("ID: " + person.id + "\n" + 
          "Name: " + person.firstName + " " + person.lastName + "\n" + 
          "Gender: " + person.gender + "\n" + 
          "DoB: " + person.dob + "\n" + 
          "Height: " + person.height + "\n" + 
          "Weight: " + person.weight + "\n" + 
          "Eye Color: " + person.eyeColor + "\n" + 
          "Occupation: " + person.occupation + "\n" + 
          "Parents: " + person.parents + "\n" + 
          "Current Spouse: " + person.currentSpouse);
          let searchType = promptFor("Would you like to continue looking into " +person.lastName+ "? Enter 'yes' or 'no'", yesNo).toLowerCase();
            switch(searchType){
              case 'yes':
                mainMenu(filteredPeople, people, person);
                  break;
              case 'no':
                alert("Thank you for choosing to use the Most wanted app," + "\n" + "Good Bye!");
                app(people)
                  break;
            }
            break;
      case "family":
        familyInfo(filteredPeople);
          break;
      case "descendants":
        displayPerson(childrenFinder(filteredPeople))
          break;
      case "restart":
        app(people); 
          break;
      case "quit":
        alert("Thank you for choosing to use the Most wanted app," + "\n" + "Good Bye!");
        return; 
      default:
        return mainMenu(person, people);
    }
  return app(people);
}
function familyInfo(filteredPeople) {
  let filteredParents = parentsFinder(filteredPeople);
  let filteredSiblings = siblingFinder(filteredPeople);
  let filteredSpouse = spouseFinder(filteredPeople);
  let filteredChildren = childrenFinder(filteredPeople);
}
function parentsFinder(filteredPeople){
  let filteredParents = [];
    for (let i = 0; i < filteredPeople.parents.length; i++){
      filteredParents[i] = data.filter( function(person){
        if (filteredPeople.parents[i] == person.id){
          return true;
        }
        else {
          return false;
        }
      });
    }
  console.log(filteredParents);
  alert("Parent(s) has/have been logged into the console, Returning to main menu.");
    return filteredParents;
}
function siblingFinder(filteredPeople){
  let filteredSiblings = filteredPeople.parents;
    for (let i = 0; i < filteredPeople.parents.length; i++){
      filteredSiblings[i] = data.filter( function(person){
        if (filteredPeople.parents[i] == person.parents[i]){
          return true;
        }
        else {
          return false;
        }
      });
    }
  console.log(filteredSiblings[0]);
  alert("Sibling(s) has/have been logged into the console, Returning to main menu.");
  return;
}
function spouseFinder(filteredPeople){
  var filteredSpouse = [];
  filteredSpouse = data.filter( function(person){
    if (filteredPeople.currentSpouse == person.id){
      return true;
    }
    else {
      return false;
    }
  });
  console.log(filteredSpouse);
  alert("Spouce has been logged into the console, Returning to main menu.");
  return;
}

function displayPerson(filteredDescendants){
  var shoutouts =[]
  for(let i = 0; i < filteredDescendants.length; i++){
  var personInfo = "First Name: "+ " " + filteredDescendants[i].firstName + "\n";
  personInfo += "Last Name: "+ " " + filteredDescendants[i].lastName + "\n"; 
  shoutouts.push(personInfo)
  }
  alert(shoutouts)
  app();
}

function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no" || input.toLowerCase() == "i don't know";
}
function filterDoBintoYearValue(person) {
  let date1 = new Date();
  let date2 = new Date(person.dob); 
  let timeComb = Math.abs(date1.getTime()) + Math.abs(date2.getTime());
  let diffDays = (timeComb / (1000 * 3600 * 24)); 
  let diffYears = Math.floor(diffDays / 365.25)
  return diffYears;
}

function chars(input){
  return true; 
}


function childrenFinder(filteredPeople, filteredDescendants) {
  var filteredDescendants =[];
  var children = data.filter( function(person){
    for (let i = 0; i < person.parents.length; i++) {
      if (person.parents[i] === filteredPeople.id) {
        filteredDescendants.push(person)
        return true;
      }
      else {
        for(let i = 0; i <= filteredDescendants.length; i++){
          if(person.parents[i] === filteredDescendants[i]){
          filteredDescendants.push(person)
          return true;
          }
        }
      }
    }
  }); 
      for (let i = 0; i < children.length; i++) {
        filteredPeople = children[i]
          if(childrenFinder(filteredPeople) >= 1){
          children = children.concat(childrenFinder(filteredPeople));
        }
      }

      if(children.length > 0){
        for(let j = 0; j < children.length; j++){

          console.log(children[j])
        }
      }
      return filteredDescendants
}




 
    
