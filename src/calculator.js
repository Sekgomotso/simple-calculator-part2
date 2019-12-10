class Calculator {
    constructor () {
        this.lastv = '';
        this.slotv = [];
    }

    // Add multiple numbers function
    add() {
        var sum = 0;
        var i = 0;
        
        for (i = 0; i < arguments.length; i++) {
            if(arguments[i] === 'LAST') {
                arguments[i] = this.lastv;
            }

            if(arguments[i] === '') {
                arguments[i] = this.get_slot();
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

    //memory slots
    
    set_slot() {
        
        this.slotv.push(this.lastv);

    }

    get_slot (x) {
        return this.slotv[x-1];
    }
}

var answer = new Calculator();
console.log(answer.add(1,0));
console.log(answer.multiply('LAST', 5));
console.log(answer.add(1,2));
answer.set_slot(1);
console.log(answer.get_slot(1));

console.log(answer.add(10,20));
answer.set_slot(2);
console.log(answer.get_slot(2));

console.log(answer.add(100,200));
console.log(answer.get_slot(1));
console.log(answer.get_slot(2));
console.log(answer.last());

console.log(answer.add('LAST', 10));
console.log(answer.multiply('SLOT_1', 5));

module.exports = {
    Calculator
}