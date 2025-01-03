// console.log("Frohes neues!");
// Zeilenkommentar
// Blockkomentar 

/***** Variablen 01 *******/

// console.log("Hi!");
// console.log("Hi");

/* Deklaration + Wertzuweisung I */

// let firstName; // Deklaration (Definition)
// console.log(firstName); // Ausgabe 
// firstName = "Max"; // Wertzuweisung / assignment
// console.log(firstName); // Ausgabe 
// let familyName = "Mütze"; // Deklaration + Wertzuweisung
// console.log("Hi, ich bin " + firstName + " " + familyName + "!"); // Ausdruck / Expression

/*  
    Wertzuweisung II + Datentypen 
    JS ist eine untypisierte Sprache!
*/

// let test; // Deklaration
// console.log("Datentyp: " + typeof test); // Datentyp ausgeben
// console.log("Inhalt: " + test);
// console.log("----------------------");
// test = "hello"; // String
// console.log("Datentyp: " + typeof test); // Datentyp ausgeben
// console.log("Inhalt: " + test);
// console.log("----------------------");
// test = 2; // Number + Überschreiben
// console.log("Datentyp: " + typeof test); // Datentyp ausgeben
// console.log("Inhalt: " + test);
// console.log("----------------------");
// test = true // Boolsche Algebra / Boolean 
// console.log("Datentyp: " + typeof test); // Datentyp ausgeben
// console.log("Inhalt: " + test);
// console.log("----------------------");

/* Variablen vs. Konstanten in JS */

// // Variable
let test;  // Variable : Deklaration
test = "hi"; // Wertzuweisung (Initialisierung)
test = "hello"; // Überschreiben
console.log("Inhalt: " + test); // Ausgabe

// Konstante
const test2 = "Hi!"; // Deklaration + Wertzuweisung gemeinsam!
test2 = "Hello!"; // Laufzeitfehler
console.log("Inhalt: " + test2); // Ausgabe
