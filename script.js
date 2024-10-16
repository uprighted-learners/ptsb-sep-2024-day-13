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
// anotherHoistedFunction()

let anotherHoistedFunction = function () {
    console.log("I am clean code hoisted function - the very best!")
}


// RECURSION
function factorial(n) {
    // base case: if n is 1, return 1
    if (n === 1) {
        return 1;
    }

    // recursive case: n * factorial(n - 1)
    return n * factorial(n - 1);
};

console.log("factorial", factorial(10))

function infiniteRecursion() {
    infiniteRecursion()
}

// infiniteRecursion() // ERROR: Maximum call stack size exceeded

function fibonacci(n) {
    // base case: if n is 0 or 1, return n
    if (n === 0) {
        return n;
    } else if (n === 1) {
        return n;
    }

    // recursive case: fibonacci(n - 1) + fibonacci(n - 2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("fibonacci", fibonacci(25))

function singBeerSong(bottles) {
    let initialValue = bottles

    // base case: if bottles is 0, return "No more bottles of beer on the wall"
    if (bottles === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer.")
        console.log(`Go to the store and buy some more, ${initialValue} bottles of beer on the wall.`)
        return; // return is optional here
    }

    // print the current verse
    console.log(`${bottles} bottle${bottles === 1 ? "" : "s"}` + " of beer on the wall")
    console.log(`${bottles} bottle${bottles === 1 ? "" : "s"} of beer`)
    console.log("Take one down, pass it around.")
    console.log((bottles - 1) + " bottles of beer on the wall.")
    console.log("")

    // recursive case
    singBeerSong(bottles - 1)
};

singBeerSong(9)