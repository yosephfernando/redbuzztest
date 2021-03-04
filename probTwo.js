function PairedItem(inputArr, amount){
    let paired = [];
    for(let i = inputArr.length;i>0;i--){
        let currentVal = inputArr[i-1];
        let newArray = inputArr;
        newArray.pop();
        for(let j = 0;j<newArray.length;j++){
            if((currentVal+newArray[j]) == amount){
                paired.push([currentVal, newArray[j]])
            }
        }
    }
    return paired;
}

let x = [1,5,6,1,0,1];
console.log("Answer number two");
console.log("x >>>>>>", x);
let y = 6;
let z = PairedItem(x, y);
console.log("y >>>>>>", y);
console.log("z >>>>>>", z);
console.log("********************************");