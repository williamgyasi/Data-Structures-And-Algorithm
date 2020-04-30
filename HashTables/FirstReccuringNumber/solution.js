//BRUTE FORCE APPROACH
function FirstReccuringNumberBruteForce(input){
    for (let i=0;i<input.length;i++){
      for(let j=0;j<input.length;i++){
        if(input[i]===input[j]){
          return input[i]
        }
        else{
          return undefined
        }
      }
    }
  
  }
  
  //O(n*n)
  
  
  function FirstReccuringBestCaseApproach(input){
    let map={}
    for(let i=0;i<input.length;i++){
      if(map[input[i]]!==undefined){
        return input[i]
      }
      else{
        map[input[i]]=i
      }
    }
    return undefined
  }
  //O(n)
  
  
  FirstReccuringBestCaseApproach([2,5,4,2,13,1])
  FirstReccuringNumberBruteForce([2,5,4,2,13,1])