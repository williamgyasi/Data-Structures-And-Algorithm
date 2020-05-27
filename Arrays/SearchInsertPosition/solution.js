function arraySort(a,b){
    return a-b
    }
    
    function returnIndex(nums, target) {
      //PUSH TARGET ITEM TO LAST OF ARRAY AND SORT 
      nums.push(target)
      nums.sort(arraySort)
      const indexOfTarget = nums.indexOf(target)
      console.log(indexOfTarget)
      
    }
    
    
    returnIndex([1, 3, 5, 6],7 )
    