/** 
 * function takes an array as parameter 
 * give me the avarage of the odd numbers in the array 
 */

function oddaAvarage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            // console.log(number);
            odds.push(number);
        }
    }
    // console.log(odds)
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count)
    const avg = sum / count;
    return avg;
}

const numbers = [45, 56, 21, 12, 87, 41, 47, 11];
const avg = oddaAvarage(numbers);
console.log('average of the odd numbers is', avg)