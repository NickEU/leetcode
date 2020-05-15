'use strict';
// Say you have an array for which the ith element
// is the price of a given stock on day i.

// If you were only permitted to complete
// at most one transaction (i.e., buy one
// and sell one share of the stock),
// design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

/**
 * @param {number[]} prices
 * @return {number}
 */
// time O(n) space O(1)
const maxProfit = function(prices) {
  let minStockPrice = prices[0],
    bestTradeSoFar = 0;
  for (let i = 1; i < prices.length; i++) {
    const currStockPrice = prices[i];
    const potentialTrade = currStockPrice - minStockPrice;
    if (potentialTrade > bestTradeSoFar) {
      bestTradeSoFar = potentialTrade;
    }

    if (currStockPrice < minStockPrice) {
      minStockPrice = currStockPrice;
    }
  }

  return bestTradeSoFar;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]) === 5);
console.log(maxProfit([7, 6, 4, 3, 1]) === 0);
