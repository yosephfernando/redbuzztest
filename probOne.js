let missingNumber = [];
let resArr = [];

function oneMissNumber(arr){
    let newSortedArray = [];
    for(let i = 0;i<arr.length;i++){
        let getPrev = 0;
        let currentVal = arr[i];

        if(i > 0){
            getPrev = arr[i-1];
        }

        if(currentVal - getPrev == 1){
            newSortedArray.push(currentVal);
        }else{
            missingNumber.push(getPrev + 1);
            newSortedArray.push(getPrev + 1);
            newSortedArray.push(currentVal);
            oneMissNumber(newSortedArray);
        }
        resArr = newSortedArray;
    }
}

let inputArr = [1, 2, 3, 4, 5, 6, 8, 9, 10];
oneMissNumber(inputArr);
console.log("Answer number one");
console.log("x >>>>", inputArr);
// console.log("New sroted array >>>>", resArr);
console.log("y >>>>", missingNumber);
console.log("********************************");