var {Calculator} = require('../src/calculator');
var answer = new Calculator;

console.log(answer.add(1,0));
console.log(answer.last());

describe("Simple calculator to add two numbers", function () {
    it("Should return 0", function () {
        expect(answer.add(0,0)).toEqual(0);
    });

});

// console.log(answer.add(1,2));
// describe("Simple calculator to add two numbers", function () {
//     it("Should return -2", function () {
//         expect(calculator.add(-1,-1)).toEqual(-2);
//     });

//     it("Should return 9", function () {
//         expect(calculator.add(4,5)).toEqual(9);
//     });

// });

// describe ("Simple calculator to add multiple numbers", function () {
//     it("should return 10", function () {
//         expect(calculator.add(1,2,3,4)).toEqual(10);
//     });

// });

// describe ("Simple calculator to multiply two numbers", function () {
//     it("should return 2", function () {
//         expect(calculator.multiply(1,2)).toEqual(2);
//     });

// });

// describe ("Simple calculator to multiply many numbers", function() {
//     it("should return 24", function() {
//         expect(calculator.multiply(1,2,3,4)).toEqual(24);
//     })
// })