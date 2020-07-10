var maximumProfit = function(prices) {
    let mindiff = Number.MAX_SAFE_INTEGER + 1;
    let maxprofit = 0
  
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < mindiff) {
        mindiff = prices[i]
      } 
      else if (prices[i] - mindiff > maxprofit) {
        maxprofit = prices[i] - mindiff;
      }
  
    }
    console.log(maxprofit)
  }
  
  
  maximumProfit([7, 1, 5, 3, 6, 4])
  