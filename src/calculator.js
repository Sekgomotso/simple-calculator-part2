class Calculator {
    constructor () {
        // this.add = 0;
        // this.multiply = 1;
        this.lastv = 0;
    }

    // Add multiple numbers function
    add() {
        var sum = 0;
        var i = 0;
        
        for (i = 0; i < arguments.length; i++) {
            if(arguments[i] == 'LAST') {
                arguments[i] = this.lastv;
            }

            sum += arguments[i];
            arguments[i] = this.lastv;
            this.lastv = sum;
        }
        return sum;
    }

    // Multiply multiple numbers function

    multiply() {
        var multiply = 1;
    
        for (i = 1; i < arguments.length; i++) {
            this.multiply *= arguments[i];
        }
        return multiply;
    }

    last() {
        return this.lastv;
    }
}

// var answer = new Calculator();
// console.log(answer.add(1,0));
// console.log(answer.last());

module.exports = {
    Calculator
}