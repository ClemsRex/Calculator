// CALCULATOR PROGRAM

const display = document.getElementById("display");


function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}

// 

function clearDisplay() {
    display.value = "";
}

//

function root() {
    const q = document.getElementById("display").value;
    document.getElementById("display").value = Math.sqrt(q)
}

// 

function square() {
    const r = document.getElementById("display").value;
    document.getElementById("display").value = r**2;
}


//
function sine() {
    const s = document.getElementById("display").value;
    document.getElementById("display").value = Math.sin(s)
}

//

function cos() {
    const c = document.getElementById("display").value;
    document.getElementById("display").value = Math.cos(c)
}


//
function tan() {
    const t = document.getElementById("display").value;
    document.getElementById("display").value = Math.tan(t)
}

//
function log() {
    const l = document.getElementById("display").value;
    document.getElementById("display").value = Math.log10(l)
}