module.exports = {
    add,
    multiply
}

function add() {
    var add = 0;
    
    for (i = 0; i < arguments.length; i++) {
        add += arguments[i];
    }
    return add;
}

function multiply() {
    var multiply = 1;

    for (i = 1; i < arguments.length; i++) {
        multiply *= arguments[i];
    }
    return multiply;
}

class Calculator {
    constructor () {
        this.add = 0;
        this.multiply = 0;
    }

    // Add multiple numbers function
    function add() {
        var add = 0;
        
        for (i = 0; i < arguments.length; i++) {
            this.add += arguments[i];
        }
        return add;
    }

    // Multiply multiple numbers function

    function multiply() {
        var multiply = 1;
    
        for (i = 1; i < arguments.length; i++) {
            this.multiply *= arguments[i];
        }
        return multiply;
    }
}