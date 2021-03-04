let missingNumber = [];
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
    }
}

let inputArr = [1, 2, 3, 4, 5, 6, 8, 9, 10];
oneMissNumber(inputArr);
console.log("Answer number one");
console.log("x >>>>", inputArr);
console.log("y >>>>", missingNumber[0]);
console.log("********************************");