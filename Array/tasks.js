// Reverse

// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// console.log(colors);

// colors.reverse();

// console.log(colors);


// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }

// console.log(evenNumbers);

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumbers = [];

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 ===1){
//         evenNumbers.push(numbers[i]);
//     }
// }
// console.log(evenNumbers);

// var names = ['Tom', 'Tim', 'Tin', 'Tik'];
// let result = '';

// for (const name of names) {
//   result += name;
// }

// // console.log(result);
// var names = ['Tom', 'Tim', 'Tin', 'Tik'];
// let result = '';
// for (const name of names){
//     result += name;
// }
// console.log(result)

// const statement = 'I am a hard working person';

// const reversed = statement.split(' ').reverse().join(' ');

// console.log(reversed);
// const statement = 'I am a hard working person';

// const reversed = statement.split('').reverse().join('');

// console.log(reversed);

const original = [1, 2, 3];

// Make a copy using the spread operator
const copy = [...original];

// Change the first element of the copied array
copy[0] = 99;

console.log('Original:', original);
console.log('Copy:', copy);
