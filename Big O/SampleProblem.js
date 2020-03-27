//WRITE AN ALGORITHM TO LOG OUT PAIRS OF AN ARRAY
const boxes=[1,2,3,4,5];
function LogPairsOfArray(array){
    for(let i =0;i<array.length;i++){
        for(let j =0;j<array.length;j++){
            console.log(array[i],array[j])
        }
    }
}
LogPairsOfArray(boxes)

//TRY AND LOG OUT 3 PAIRS OF THE ARRAY WITH YOUR OWN CUSTOM ARRAY
