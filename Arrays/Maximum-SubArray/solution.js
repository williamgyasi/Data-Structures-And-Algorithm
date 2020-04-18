function maxSubarray(array) {
    var currentMax = 0;
    var max = 0;
    for (var i = 0; i < array.length; i += 1) {
      currentMax = Math.max(0, currentMax + array[i]);
      console.log(currentMax)
      max = Math.max(max, currentMax);
    }
    return max;
  }

maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])