/* Berechnung Alter */


// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

// Berechnung Alter

let date = new Date();
let year = date.getFullYear();
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("");
console.log("John ist " + ageJohn + " Jahre alt!");
console.log("");
console.log("Mark ist " + ageMark + " Jahre alt!");
console.log("");

// Tests
let isJohnOlder; // Is John older? --> y/n --> true | false
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);