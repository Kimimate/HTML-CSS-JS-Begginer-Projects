// *****************  Functions  *****************

// const sum = (a, b) => a + b;

// function percentCalculate(number, percent) {
//     let percentage = number * (percent / 100);
//     return sum(number, percentage);

// }

// console.log(percentCalculate(10, 15));



// *****************  Array methods (push, lenght, slice, indexOf)  *****************

// let components  = ['motherBoard','CPU','GPU','RAM','hardDrive'];
// components.push('powerSupply');
// components.push('cooler');
// console.log(components);
// console.log(components.length);
// // console.log(components.slice(0, 5));
// // console.log(components.slice(3));
// console.log(components.indexOf('cooler'));



// *****************  Objects  *****************

// let introducer = (name, lastName, age, eyeColor ) => {
//     let person = {
//         name: name,
//         lastName: lastName,
//         age: age,
//         eyeColor: eyeColor,
//         yearBirth: function yearBirthCalc() {
//             return new Date().getFullYear() - Number(age);
//         }
//     }
//     let intro = `Hi, my name is ${person.name} and the color of my eyes is ${person.eyeColor} and I'm born in ${person.yearBirth()}`;
//     return intro;
// }
// console.log(introducer('Sebastian', 'Szewczyk', '20', 'green'));



// *****************  loops  *****************
// for (let i = 0; i < fruits.length; i++) {
//     console.log(i, fruits[i]);
// }



// let double = (numbers) => {
//     let result = [];
//     for (let number of numbers) {
//         result.push(number * 2);
//     }
//     return result;
// }
// console.log(double([1,2,3,4,5,6]));



// let howManyLetters = (phrase) => {
//     let result = 0;
//     for (let index in phrase) {
//         console.log(Number(index) + 1);
//         result = Number(index) + 1;
//     }
//     return {result};
// }
// console.log(howManyLetters('LOVE'));



// let sumArray = (numbers) => {
//     let result = 0;
//     for (let number of numbers) {
//         console.log(number);
//         result = result + number;
//     }
//     return {result};
// }
// console.log(sumArray([1,2,3]))



