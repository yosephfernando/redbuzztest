function minimalCost(totaljarak, maxtank, spbu, harga){
    let remapSpbu = [];
    let distanceNow = 0;
    let currentTank = maxtank;
    let tankToFill = 0;
    let remainDistance = totaljarak;
    let totalCost = 0;

    for(let i = 0;i<spbu.length;i++){
        let item = {};
        item.distance = spbu[i];
        item.price = harga[i];
        remapSpbu.push(item);
    }

    let nearest = null; 
    while(remainDistance > 0){
        nearest = findNearest(remapSpbu, currentTank, distanceNow)
        if(nearest != null){
            let indexOfNearest = remapSpbu.indexOf(nearest);
            distanceNow = nearest.distance;
            remainDistance = totaljarak - distanceNow;
            if(indexOfNearest > 0){
                remapSpbu.splice(0, (indexOfNearest+1));
            }else{
                remapSpbu.shift();
            }
            currentTank = maxtank;
            tankToFill = nearest.restDistance;
            totalCost += (nearest.price*tankToFill);
            console.log("KM >>>>>>", distanceNow);
            console.log("Bensin yg harus diisi >>>>>>", tankToFill);
            console.log("Harga >>>>>>", nearest.price);
            console.log("Subtotal >>>>>>", nearest.price*tankToFill);
            console.log("-------------------");
            if(currentTank > remainDistance){
                break;
            }
           
        }
    }
    console.log("Total biaya >>>>>>", totalCost);
    
    return remapSpbu;
}

function findNearest(spbu, currentTank, distancenow){
    let res = null;
    let nearest = [];
    let prices = [];
    for(let i = 0;i<spbu.length;i++){
        let restDistance = spbu[i].distance - distancenow;
        if(restDistance < currentTank){
            spbu[i].restDistance = restDistance;
            nearest.push(spbu[i]);
            prices.push(spbu[i].price);
        }
    }

    for(let i = 0;i<nearest.length;i++){
        if(nearest[i].price == Math.min.apply(null, prices)){
            res = spbu[i];
        }
    }
    return res;
}

let totalJarak = 500;
let maxTank =  180;
let SPBU = [100,140,150,200,330,360,400];
let HARGA = [1000,2000,5000,1000,6000,4000,1000];
console.log("Answer number four");
minimalCost(totalJarak, maxTank, SPBU, HARGA);

console.log("********************************");