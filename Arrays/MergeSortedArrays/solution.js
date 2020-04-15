//Clues
//Independent Arrays will always be sorted
// Arrays are not of equal length
function MergeSortedArray(arr1,arr2){
    const merged=[]
    //FETCHING FIRST ARRAY ITEMS
    let array1Item=arr1[0]
    let array2Item=arr2[0]
    let i=1
    let j=1
    //Check Input
    if(arr1.length===0){
        return arr2
    }
    if(arr2.length===0){
        return arr1
    }
    
    while(array1Item||array2Item){
        if(!array2Item||array1Item <array2Item){
            merged.push(array1Item)
            array1Item=arr1[i]
            i++
        }else{
            merged.push(array2Item)
            array2Item=arr2[j]
            j++
        }
    }
    return merged
    }
    
    MergeSortedArray([0,1,3,4],[1,5,8,9])