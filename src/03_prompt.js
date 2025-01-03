// Installation 
// npm install -g npm@latest
// npm cache clean --force
// npm install prompt-sync

const prompt = require('prompt-sync')({sigint: true});

// Alles muss man selber machen lassen! ...

let firstName = prompt("Vorname?:");
let familyName = prompt("Name?:");
console.log("Hallo, " + firstName + " " + familyName +"!");