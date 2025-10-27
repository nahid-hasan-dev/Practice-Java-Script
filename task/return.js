function doubleIt (number, num){
    if(number > num){
        let theNum = number - num;
        return theNum;
    }else{
        let theNum = num - number;
        return theNum;
    }
}

let dabol = doubleIt(20, 25);

console.log(dabol);