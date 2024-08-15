/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let currentIndex = 0;
  let nextIndex = 1;
  
  while(nextIndex < prices.length) {
    if (prices[currentIndex] < prices[nextIndex]) {
      let currentProfit = prices[nextIndex] - prices[currentIndex];
      
      maxProfit = Math.max(maxProfit, currentProfit);
    } else {
      currentIndex = nextIndex;
    }
    nextIndex++;
  }
      
  return maxProfit;
};