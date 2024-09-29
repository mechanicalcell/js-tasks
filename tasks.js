// Максимальная прибыль на акциях

// Описание задачи:

// Вы получаете массив prices, где prices[i] указывает цену данной акции в i-ый день.

// Вы хотите максимизировать свою прибыль, выбрав один день для покупки одной акции и выбрав другой день в будущем для продажи этой акции.

// Напишите функцию maxProfit(prices), которая возвращает максимальную прибыль, которую вы можете получить от этой сделки. Если вы не можете получить какую-либо прибыль, верните 0.

var maxProfit = function (prices) {
  let max = 0;
  for (i = 0; i < prices.length; i++) {
    for (j = 1 + i; j < prices.length; j++) {
      if (prices[j] - prices[i] > 0 && prices[j] - prices[i] > max) {
        max =+ prices[j] - prices[i];
      } 
    }  
  }
  return max; 
}
  
maxProfit([7, 1, 5, 3, 6, 4]);
