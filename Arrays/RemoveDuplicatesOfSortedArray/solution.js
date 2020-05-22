var removeDuplicates = function(nums) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
      if (map[nums[i]] === undefined) {
         map[nums[i]] = i
      }
    }
   var result = Object.keys(map).map(function(item,index){
   return (Number(item))
   })
   return result
  }

  let newArray =removeDuplicates([1,1,2])
  console.log(newArray)
  
  
  