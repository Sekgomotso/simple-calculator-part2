class Calculator {
    constructor () {
        // this.add = 0;
        // this.multiply = 1;
        this.lastv = 0;
        this.slotv = [];
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
        var product = 1;
        var i = 0;
    
        for (i = 1; i < arguments.length; i++) {
            if(arguments[i] == 'LAST') {
                arguments[i] = this.lastv;
            }

            product *= arguments[i];
            arguments[i] = this.lastv;
            this.lastv = product;
        }
        return product;
    }

    last() {
        return this.lastv;
    }

}

var answer = new Calculator();
console.log(answer.add(1,0));
console.log(answer.multiply("LAST", 5));

module.exports = {
    Calculator
}
