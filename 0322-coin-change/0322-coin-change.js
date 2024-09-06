/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const minCoins = new Array(amount + 1).fill(amount + 1);
  minCoins[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i >= coin) {
        minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1);
      }
    }
  }

  return minCoins[amount] > amount ? -1 : minCoins[amount];
};