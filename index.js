function receivesAFunction(callbackDummy) {
    return callbackDummy();
}

function returnsANamedFunction() {
    return function namedFunction() {
    }     
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}