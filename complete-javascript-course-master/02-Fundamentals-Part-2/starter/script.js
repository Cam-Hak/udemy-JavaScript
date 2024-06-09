
// const friend1 = 'Cameron';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// console.log(friends);

// const years = new Array(2003, 2001, 2004);
// console.log(years[0]);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// years.push(2024);
// console.log(years);

// const friends = ['Cameron', 'Steven', 'Peter'];

// const cameronArray = [
//     'Cameron',
//     'Hakenson',
//     2024 - 2003,
//     'dev',
//     friends
// ];

// const cameronArray = {
//     firstName: 'Cameron',
//     lastName: 'Hakenson',
//     birthYear: 2003,
//     job: 'dev',

//     calcAge: function () {
//         return 2024 - this.birthYear;
//     }
// };

// console.log(cameronArray.calcAge());

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// if (john.bmi > mark.bmi) console.log(`${john.fullName}'s BMI (${john.calcBMI()} is higher than ${mark.fullName}'s (${mark.calcBMI()})!)`);
// else console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`);

// const types = [];

// const cameronArray = [
//     'Cameron',
//     'Hakenson',
//     2024 - 2003,
//     'dev',
//     ['Michael', 'Mark', 'John']
// ];

// for (let i = 0; i < cameronArray.length; i++) {
//     console.log(cameronArray[i], typeof cameronArray[i]);

//     types[i] = typeof cameronArray[i];
// }

// console.log(types);

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
}

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

calcAverage(totals);