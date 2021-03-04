function generateChair(totalChair){
    let chairs = [];
    for(let i = 1;i<=totalChair;i++){
        chairs.push(i)
    }
    return chairs;
}

function remapArr(chairs, colmap, rowtotal){
    let colMap = [];
    let leftRes = [];
    let rightRes = [];
    let final = [];
    let leftRest = [];
    let rigthRest = [];

    for(let i = 0;i<rowtotal;i++){
        colMap.push(colmap[0]);
        colMap.push(colmap[1]);
    }
    
    for(let i = 0;i<colMap.length;i++){
        let start = 0;
        let end = colMap[i];
        let item = chairs.slice(start, end);

        for(let j = 0;j<end;j++){
            chairs.shift();
        }

        if(item.length == colmap[0]){
            leftRes.push(item)
        }else if(item.length == colmap[1]){
            rightRes.push(item);
        }
    }

    if(chairs.length > colmap[0]){
        let item = chairs.slice(0, colmap[0]);
        leftRest.push(item);
        for(let j = 0;j<item.length;j++){
            chairs.shift();
        }
        rigthRest.push(chairs.slice(0, colmap[1]));
        
    }

    final.push(leftRes);
    final.push(rightRes);

    if(leftRest.length > 0){
        final.push(leftRest);
    }

    if(rigthRest.length > 0){
        final.push(rigthRest);
    }
    
    return final;
}

let colMap = [3,2];
let rowTotal = 3;
let totalChair = 15;
let chairs = generateChair(totalChair);
let final = remapArr(chairs, colMap, rowTotal);
console.log("Answer number three");
console.log("colMap >>>>>>", colMap);
console.log("rowTotal >>>>>>", rowTotal);
console.log("final >>>>>>", final);
console.log("********************************");