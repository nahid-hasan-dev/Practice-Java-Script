// let num = 51;
// while(num <= 100){
//     console.log(num);

//     if(num % 2 == 1){
//        console.log('even number', num); 
//     }

//     num++;
// }


let num = 81;
let sum = 0;
while(num <= 131){
    if(num % 2 == 1){
        sum += num;
        console.log('odd:', num);
    }
    num++;
}

console.log("The sum is : ", sum);