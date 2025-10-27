// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

// const heights = [167, 190, 120, 165, 137];

// function getMin(numbers){
//     let min = numbers[0];
//     for(const num of numbers){
//         if(num < min){
//             min = num;
//         }
//     }
//     return min;
// }
// const min = getMin(heights);
// console.log('min value is ', min);

const heights = [167, 190, 120, 165, 137];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const min = getMin(heights);
console.log('min value is ', min);