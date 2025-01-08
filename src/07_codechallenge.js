/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

// console.log("")
// console.log("--------------------")
// console.log("LADE GETRÄNKE CHALLENGE")
// console.log("--------------------")
// console.log("GETRÄNKE CHALLENGE GELADEN")
const prompt = require('prompt-sync')({sigint: true});
// console.log("")
const name = prompt("Bitte gib einen Namen ein: ");
if (/^[a-zA-Z]+(-[a-zA-Z]+[a-zA-Z])*$/.test(name)) {
    
} else {
    console.log("")
    console.log("Der name '" + name + "' enthält ungültige Zeichen");
    console.log(""); console.log("--------------------")
    return;
}
let age = parseInt(prompt("Gib das Alter von " + name + " ein: "));
console.log("")
console.log("")
if (isNaN(age))
{
    console.log("Der Wert für das Alter ist ungültig")
    console.log(""); console.log("--------------------")
}
else{
    switch (isNaN(age) != true) 
    {
        case age <= 0:
            console.log(name + " ist " + age + " Jahre alt? Wie geht das denn?");
            console.log(""); console.log("--------------------")
        break;

        case age > 0 && age <= 5:
            console.log(name + " ist " + age + " Jahre alt und darf Milch trinken");
            console.log(""); console.log("--------------------")
        break;
    
        case age >= 6 && age <= 12:
            console.log(name + " ist " + age + " Jahre alt und darf Milch und Saft trinken");
            console.log(""); console.log("--------------------")
        break;

        case age >= 13 && age <= 17:
            console.log(name + " ist " + age + " Jahre alt und darf Milch, Saft und Cola trinken");
            console.log(""); console.log("--------------------")
        break;

        case age >= 18 && age <= 90:
            console.log(name + " ist " + age + " Jahre alt und darf Milch, Saft, Cola und Wein trinken");
            console.log(""); console.log("--------------------")
        break;
    
        default:
        console.log("Die Zahl liegt außerhalb der Bereiche");
        console.log(""); console.log("--------------------")
    }

}