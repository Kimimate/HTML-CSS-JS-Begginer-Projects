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



// const max = (numbers) => {
//     let result = numbers[0];
//     for (const number of numbers) {
//         if (number > result) {
//             result = number;
//         }
//     }
//     return { result };
// }
// console.log(max([1, 2, 3, 4, 1, 30]));



// const max = (numbers) => {
//     let result = Math.max(...numbers);
//     return result;
// }
// console.log(max([1, 2, 3, 4, 1, 30]));



// const letterFrequency = (phrase) => {
//     // console.log(phrase);
//     let letters = {};
//     for (let letter of phrase) {
//         if (letter in letters) {
//             letters[letter] += 1;
//         } else {
//             letters[letter] = 1;
//         }
//     }
//     return letters;
// }
// console.log(letterFrequency('hahant'));



// const wordFrequency = (phrase) => {
//     console.log(phrase);
//     let array = phrase.split(' ');
//     // console.log(array);
//     let words = {};
//     for (let word of array) {
//         if (word in words) {
//             words[word] += 1;
//         } else {
//             words[word] = 1;
//         }
//     }
//     return words;
// }
// console.log(wordFrequency("i don't want to lose you you"));



// const wordFrequency = (phrase) => {
//     const words = phrase.split(' ');
//     console.log(words);
//     return letterFrequency(words);
// }
// console.log(wordFrequency('let me in'));



// *****************  Array Methods  *****************

// const doubleMap = (numbers) => {
//     return console.log(numbers.map(number => number * 2));
// }
// doubleMap([1,2,3]);



// const filter = (numbers, greaterThan) => {
//     return console.log(numbers.filter(number => number > greaterThan));
// }
// filter([1, 2, 3, 4, 5, 6], 3);



// const actors = [
//     {name: 'Jonnny', netWorth: 200000},
//     {name: 'Amber', netWorth: 10},
//     {name: 'Leonardo', netWorth: 1000000},
//     {name: 'George', netWorth: 50000000},
//     {name: 'Amitabh ', netWorth: 4500000},
//     {name: 'Robert', netWorth: 3000000}
// ]
// let result = actors.filter(actor => actor.netWorth > 10 && actor.netWorth < 50000000);
// console.log(result);
// let names = result.map(actor => actor.name).join(', ');
// document.write(`<h1>${names}</h1>`);



// let nums = [1, 2, 3, 4];
// const result = nums.reduce((a, b) => a * b);
// console.log(result);



// const actors = [
//     {name: 'Jonnny', netWorth: 200000},
//     {name: 'Amber', netWorth: 10},
//     {name: 'Leonardo', netWorth: 1000000},
//     {name: 'George', netWorth: 50000000},
//     {name: 'Amitabh ', netWorth: 4500000},
//     {name: 'Robert', netWorth: 3000000}
// ]
// const sumNetWorth = actors.reduce((a, b) => a + b.netWorth, 0);
// console.log(sumNetWorth);



// *****************  DOM Manipulation  *****************

// console.log('hello');

// let DivTitle = document.getElementById('title');
// console.log('before: ',DivTitle.innerText);

// let messege = 'Hi Kimimate';
// DivTitle.innerText = messege;

// DivTitle.innerText = 'sleep well sweety';
// console.log('after: ',DivTitle.innerText);

// DivTitle.innerHTML = `<p>${messege}</p>`;

// DivTitle.style.color = '#fff';
// DivTitle.style.backgroundColor = '#000'


let titleDiv = document.getElementById('title');
let redDiv = document.getElementById('one');
let yellowDiv = document.getElementById('two');
let grayDiv = document.getElementById('three');

redDiv.onclick = () => titleDiv.style.color = 'red';
yellowDiv.onclick = () => titleDiv.style.color = 'yellow';
grayDiv.onclick = () => titleDiv.style.color = 'gray';



