/*********   Theorie **********/

// push() / pop()
// push --> Daten rein ... (+)

// let arr = [];

// output(arr);
// arr.push("Ich");
// output(arr);
// arr.push("bin");
// output(arr);
// arr.push("Max");
// output(arr);

// // pop() --> Daten raus ... (-)
// output(arr.pop());
// output(arr);
// output(arr.pop());
// output(arr);
// output(arr.pop());
// output(arr);


/*********  Praxis **********/

/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
/*
Aufgabe:

<html><head></head><body><h1></h1><p></p></body></html>
	
---->

<html>
	<head>
	</head>
	<body>
		<h1>
        </h1>
		<p>
        </p>
	</body>
</html>

--> return : "\n"  
--> Tab: "\t"

Verwenden Sie dafür die untenstehenden Arrays / Objekte

*/

const COBJ      = {open_o:"<",close_o:"</",close:">"}
const TAGS = [  "html","head","head","body",
                "h1","h1",
                "p","p",
                "ul","li","li","li","li","li","li","ul",
                "p","p",
                "body","html"
            ];


const NEW_LINE_STR = "\n";
const TAB_STR = "\t";
const ERR_STR = "Error!";

let stack = [];

// Modul: HTML-Synthese | Test
output(getHTML());
function getHTML() {

    let htmlStr = "";
	let count = 0;
	let op = "";
	
    for (let i = 0; i < TAGS.length; i++) {
        if (isOpenElement(TAGS[i])) { 
            count = stack.length-1; 
			op = "open";
        } else {
			count = stack.length; 
			op = "close";
		}

		htmlStr += getTabs(count) + getElement(TAGS[i],op) + NEW_LINE_STR;

    }

    return htmlStr;
}

// Modul: Erstellen der Tabulatoren (1..n)
function getTabs(count) {
    let tabs ="";
    for (let i = 0; i < count; i++) {
        tabs += "\t";
    }
    return tabs;
}

// Modul: Entscheidung open/close
function isOpenElement(tag) {
    
    // tag liegt NICHT oben! --> neu, open
    let cond = (tag != stack[stack.length-1])  
    
    if (cond) {  // open
        stack.push(tag);
        output(stack);
        return true;
    } else {  // close
        stack.pop();
        output(stack);
        return false;
    }
     
}

// Modul: Zusammenbau der Elements: <tagStr> --> Tests:
// output(getElement(TAGS[1],"open"));
// output(getElement(TAGS[1],"close"));
// output(getElement(TAGS[1]));
function getElement(tag,op) {
    switch (op) {
        case "open":
            return COBJ.open_o + tag + COBJ.close;
        case "close":
            return COBJ.close_o + tag + COBJ.close;
        default:
            return ERR_STR;
    }
}


// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}