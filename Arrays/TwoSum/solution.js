function TwoSum(nums, target) {
    const comp = {};
     for(let i=0; i<nums.length; i++){
         if(comp[nums[i]]>=0){
             return [ comp[nums[i] ] , i]
         }
         comp[target-nums[i]] = i
     }
     
 };
 
 TwoSum([2,11,4,65,7,9,5,3],9)