const age = 11;
const price = 500;

if(age <= 10){
    console.log('you can eat for free')
}
else if(age >= 60){
    // 50% discount
    const discount = price * 50/100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else{
    console.log(price)
}