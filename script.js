// SCOPE - with var, let, const, and functions

let globalVar = "I am a GLOBAL variable!"
const anotherGlobal = "I am another global variable!"
var localVarVarVariable = "I am a var global variable!"

function showGlobalVar() {
    let localVar = "I am a LOCAL variable!"
    var localVarVariable = "I am a LOCAL var variable!"
    console.log("function " + globalVar)
    console.log("function " + anotherGlobal)
    console.log("function " + localVar)
    console.log("function " + localVarVariable)


    function localScopeExample() {
        localVar = "I am so local it hurts!"
        console.log("function in a function " + localVar)
        console.log("function in a function " + localVarVariable)
    }

    localVar = "so local that it hurts!"

    console.log("function in a function " + localVar)
    localScopeExample()
}

showGlobalVar() // I am a GLOBAL variable!
console.log("console log", globalVar) // I am a GLOBAL variable!
console.log("console log", anotherGlobal) // I am another global variable!
// console.log("console log", localVar) // localVar is not defined
// console.log("console log", localVarVariable) // localVarVariable is not defined
console.log("console log", localVarVarVariable) // I am a var global variable!

function testVar() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x); // 20
    }
    console.log(x); // 20
}

testVar()

function testLet() {
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x); // 20
    }
    console.log(x); // 10
}
testLet()

let PI = 3.14159;
console.log("PI", PI)
PI = 3.14; // Uncaught TypeError: Assignment to constant variable.
console.log("PI again", PI)

// HOISTING
var hoistedVar;
console.log("hoistedVar", hoistedVar)
hoistedVar = "I am hoisted!"
console.log("hoistedVar", hoistedVar)

let hoistedLet;
console.log("hoistedLet", hoistedLet)
hoistedLet = "I am hoisted as a let!"
console.log("hoistedLet", hoistedLet)

// console.log("hoistedConst", hoistedConst)
hoistedConst = "I am hoisted as a const!"
console.log("hoistedConst", hoistedConst)

// function hoisting
hoistedFunction()

function hoistedFunction() {
    console.log("I am a hoisted function console log expression!")
}

// DOES NOT APPLY TO FUNCTIONAL EXPRESSIONS
// hoistedFunctionExpression()

var hoistedFunctionExpression = function () {
    console.log("I am a hoisted function expression!")
}

// THE BEST example
function cleanCodeExample() {
    let myVar = "declare it at the top"
    console.log("cleanCodeExample myVar", myVar)
}

cleanCodeExample()

// functional expression - which is a NO NO on HOISTING - it will not automatically work for you!
anotherHoistedFunction()

let anotherHoistedFunction = function () {
    console.log("I am clean code hoisted function - the very best!")
}

