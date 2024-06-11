'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
   
//     function printAge() {
//         const output = `You are ${age}, born in ${birthYear}`;
//         console.log(output);
//     }
//     printAge();

//   return age;
// }

// const firstName = 'Cameron';
// calcAge(2003);

// console.log(me);

// var me = "Cameron";
// let job = "dev";
// const year = 2003;
// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function(a, b) {
//     return a + b;
// }

// const addArrow = (a, b) => a + b;

const cameron = {
    firstName: 'Cameron',
    year: 2003,
    calcAge: function() {
        return 2003 - this.year;
    }
}

