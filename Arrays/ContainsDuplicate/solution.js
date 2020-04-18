function checkDuplicate(arr){
    ;
          let result = false;
          // iterate over the array
          for(let i = 0; i < arr.length;i++) {
             // compare the first and last index of an element
             if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
                result = true;
                // terminate the loop
                break;
             }
          }
          
       }
    checkDuplicate([3,1,4,5,1,4,5])