/**
 * for a given string tell me whether it has even number of characters or not
 */

function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log("even number")
    }else{
        console.log('odd number')
    }
}
evenSizedString('Dhaka')