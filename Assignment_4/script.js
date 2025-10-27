//problem 1
function calculateTax(income, expenses) {
    if(0 > income || 0 > expenses){
        return "Invalid Input";
    }else if(income < expenses){
        return "Invalid Input";
    }

    let ay = income - expenses;
    return ay * 0.20;
}

// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));

//==============================================================

//problem 2
function sendNotification(email) {
    if(email.indexOf("@") != -1){
        let items = email.split("@");
        return `${items[0]} sent you an email from ${items[1]}`;

    }else{
        return "Invalid Email";
    }
}

// console.log(sendNotification("zihad@gmail.com"));
// console.log(sendNotification("farhan34@yahoo.com"));
// console.log(sendNotification("nadim.naem5@outlook.com"));
// console.log(sendNotification("fahim234.hotmail.com"));
// console.log(sendNotification("sadia8icloud.com"));

//==============================================================

//problem 3
function checkDigitsInName(name) {
    if(typeof name == "string"){
        const number = [0,1,2,3,4,5,6,7,8,9];
        for(let x of number){
            if(name.indexOf(x) != -1){
                return true;
            }
        }
        return false;
    }else{
        return "Invalid Input";
    }
}

// console.log(checkDigitsInName("Raj123"));
// console.log(checkDigitsInName("n9ayeem"));
// console.log(checkDigitsInName("Suman"));
// console.log(checkDigitsInName("!@#"));
// console.log(checkDigitsInName(["Raj"]));

//==============================================================

//problem 4
function calculateFinalScore(obj) {
    if(typeof obj == "object"){
        if(
            typeof obj.name == "string" && 
            typeof obj.testScore == "number" && 
            typeof obj.schoolGrade == "number" && 
            typeof obj.isFFamily == "boolean"
        ){
            if(obj.testScore <= 50 && obj.schoolGrade <=30){

                let farmarScore = obj.isFFamily ? 20 : 0;
                let total = obj.testScore + obj.schoolGrade + farmarScore;
                return total >= 80 ? true : false;
            }
        }
    }
    
    return "Invalid Input";
}

// console.log(calculateFinalScore( { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true } ));
// console.log(calculateFinalScore( { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false } ));
// console.log(calculateFinalScore( "hello"  ));
// console.log(calculateFinalScore( { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  } ));

//==============================================================

//problem 5
function waitingTime(waitingTimes  , serialNumber) {
    if(Array.isArray(waitingTimes) && typeof serialNumber == "number"){
        if(serialNumber > waitingTimes.length){
            let timeSum = 0;
            for (num of waitingTimes){
                timeSum += num;
            }
            let avarageTime = Math.round(timeSum/waitingTimes.length);
    
            let leftPeople = serialNumber - 1 - waitingTimes.length;
    
            return avarageTime * leftPeople;
        }
    }
    return "Invalid Input";
}

// console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
// console.log(waitingTime([13, 2], 6));
// console.log(waitingTime([13, 2, 6, 7, 10], 6));
// console.log(waitingTime([6], 4));
// console.log(waitingTime(7 , 10));
// console.log(waitingTime("[6,2]", 9));
// console.log(waitingTime([7, 8, 3, 4, 5], "9"));
