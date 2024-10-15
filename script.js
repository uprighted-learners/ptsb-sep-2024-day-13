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
console.log("console log", localVarVariable) // localVarVariable is not defined
console.log("console log", localVarVarVariable) // I am a var global variable!

