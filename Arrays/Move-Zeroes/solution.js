function MoveZeroes(nums){
    var i, temp;
     for (i = nums.length-1; i>=0; i--) {
         if(nums[i] === 0) {
             temp = nums.splice(i, 1);
             nums.push(temp[0]);
         }
     }
     return nums;
 }
 
 MoveZeroes([1,1,5,0,12])