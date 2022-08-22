function receivesAFunction(callBackFunc) {
    callBackFunc();
}




function returnsANamedFunction() {
return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return ()=> console.log("i am new here")
}