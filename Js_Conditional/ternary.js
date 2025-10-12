/**
 * TERNARY --> three parts
 *  ?   :
 * 
 * condition ? do somethin when true : do something when false
 */

const age = 12;
// if(age >= 18){
//     console.log('you can vote')
// }
// else{
//     console.log('ghumai thako')
// }


// age >= 18 ? console.log('vote dio') : console.log('Ghumai Thako');

// let price = 500;
// const isLeader = false;

// price = isLeader === true ? 0 : price + 100;

// if(isLeader == true){
//     price = 0;
// }
// else{
//     price = price + 100;
// }
// console.log(price)

// OPTIONAL : semi advanced ternary

let price = 1000;
let isLeader = true;

if( isLeader === true){
    if(price > 1000) {
        price = price /2;
    }
    else{
        price = 0;
    }
}
else{
    price = price + 1000;
}
