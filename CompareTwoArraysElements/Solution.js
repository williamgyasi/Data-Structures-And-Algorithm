const array1=['a','b','c','e','f'];
const array2=['z','y','i'];
//SHOULD RETURN FALSE.
// const array1=['a','b','c','x'];
// const array2=['z','y','x'];
// //SHOULD RETURN TRUE

//BRUTE FORCE SOLUTION
// function checkElements(array1,array2){
//     for(let i=0;i<array1.length;i++){
//         for(let j=0;j<array2.length;j++){
//             if(array1[i]===array2[j]){
//                 return true
//         }
//         }
//         }
//         return false
// }

// checkElements(array1,array2)

//ACTUAL SOLUTION

function bestSolution(arr1,arr2){
  let map={}
  for(let i=0;i<array1.length;i++){
    if(!map[arr1[i]]){
      const item=arr1[i]
      map[item]=true
    }
  }
  console.log(map)
  for(let j=0;j<arr2.length;j++){
    if(map[arr2[j]]){
      return true
    }
    
  }
  return false


};

bestSolution(array1,array2)