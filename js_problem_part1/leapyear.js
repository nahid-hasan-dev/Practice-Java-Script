function isLeapYear(year){
    if(year % 4===0){
        return true;
    }
    else{
        return false;
    }
}

const isLipi = isLeapYear(2040);
console.log(isLipi);