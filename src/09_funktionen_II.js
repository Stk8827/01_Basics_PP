/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  check! | ????
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

const ERROR_STR_DIV = "Teilen durch 0 nicht möglich!";
const ERROR_STR_CAL = "Irgendwas ging schief!";

const prompt = require('prompt-sync')({sigint: true});

startApp();
function startApp() {
   output(calculator(getNum1(),getNum2(),getOp()));
}

function getNum1() {
    return parseInt(prompt("Num1?: "));
}

function getNum2() {
    return parseInt(prompt("Num2?: "));
}


function getOp() {
    return prompt("OP?: ");
}


// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));
function calculator(a,b,op) {
    switch (op) {
        case "+":  // addieren
            return add(a,b);  // weiterleitung
        case "-": // subtrahieren
            return subtract(a,b);
        case "*": // multiplizieren
            return multiply(a,b);
        case ":": // dividieren
        case "/": // dividieren
            return divide(a,b);
        default:
           return ERROR_STR_CAL;
    }
}

// module: division a / b |  test:
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(0,2));
// output(divide(3,0));
// output(divide(0,0));
function divide(a,b) {
    if (b == 0) {  // Ausnahme
        return ERROR_STR_DIV; 
    }
    return a / b;
}

// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
	return  a * b;
}

// module: subtraction a - b |  test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
// output(subtract(0,2));
function subtract(a,b) {
	return a - b;
}

// module: addition a + b |  test:
// output(add(3,2));
// output(add(3,-2));
// output(add(3,0));
function add(a,b) {
    return a + b;
}

// module: output | test:
// output("hi");
// output(2);
// output(true);
function output(outputData) {
    console.log(outputData);
}