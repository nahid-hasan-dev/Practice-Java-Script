// const biriyaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];

// function noDuplicate(array){
//     const unique = [];
//     for(const item of array){
//         if(unique.includes(item) === false){
//             unique.push(item);
//         }
//     }
//     return unique;
// }

// const uniqueArray = noDuplicate(biriyaniKhor);
// console.log(uniqueArray);


const biriyaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biriyaniKhor);
console.log(uniqueArray);