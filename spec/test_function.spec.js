var {Calculator} = require('../src/calculator');
var answer = new Calculator;

console.log(answer.add(1,0));
console.log(answer.last());

describe("Simple calculator to add two numbers", function () {
    it("Should return 0", function () {
        expect(answer.add(0,0)).toEqual(0);
    });

});

describe ("Simple calculator to add multiple numbers", function () {
    it("should return 10", function () {
        expect(answer.add(1,2,3,4)).toEqual(10);
    });

    it("last()", () => {
        expect(answer.add('LAST', 5)).toBe(15);
    });

    it("set slots (1), get slot", ()=> {

        answer.add(10,20);
        answer.set_slot(1);

        expect(answer.get_slot(1)).toBe(30);
    });

});

describe ("Simple calculator to multiply many numbers", function() {
    it("should return 24", function() {
        expect(answer.multiply(1,2,3,4)).toEqual(24);
    });

})