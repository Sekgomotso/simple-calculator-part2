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

class Add {
    constructor (a,b) {
        this.function = a + b;
    }
}