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
        max = prices[j] - prices[i];
      } 
    }  
  }
  return max; 
}
  
maxProfit([7, 1, 5, 3, 6, 4]);

// Вычисление числа Фибоначчи

// Реализуйте функцию fibonacci(n), которая возвращает n-ное число Фибоначчи.

// Числа Фибоначчи определяются следующим образом: F(0) = 0, F(1) = 1, и для всех n больше 1, F(n) = F(n-1) + F(n-2).

// Ограничения:

// 0 <= n <= 30

/**
 * @param {number} n - Неотрицательное целое число, для которого нужно вычислить число Фибоначчи.
 * @return {number} - n-ное число Фибоначчи.
 */

var fibonacci = function (n) {
  let prev = 0,
      next = 1;
  for (let i = 0; i < n; i++) {
    let temp = next;
    next = prev + next;
    prev = temp;
  }
  return prev;  
};

// Сумма элементов массива чисел

// Дан массив чисел, необходимо написать функцию, которая возвращает сумму всех элементов массива.

var sumArray = function (nums) {
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    console.log(nums.length);
    sum += nums[i];
  }
  return sum;
};  

// Подсчёт положительных элементов в массиве

// Дан массив чисел, необходимо написать функцию, которая возвращает количество положительных элементов в этом массиве.

// Пожалуйста, обратите внимание, что функция работает с массивом чисел и возвращает количество положительных элементов в этом массиве. Значения равные нулю или отрицательные значения не учитываются при подсчёте.

var countPositiveNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 ) {
      count = count + 1;  
    }
  }
  return count;
};

// Сортировка по длине

// Дан массив строк, необходимо написать функцию, которая возвращает этот же массив, отсортированный по длине строк от самой короткой к самой длинной.

// Пожалуйста, обратите внимание, что функция будет работать с массивом строк, а элементы массива будут сравниваться по их длине для сортировки.

var sortByLength = function(arr){
  arr.sort(function (a, b) {
    if (a.length < b.length) {
      return -1;
    }
    if (a.length > b.length) {
      return 1;
    }
    // a === b
    return 0;
  })
};

console.log(sortByLength(["apple", "banana", "orange", "kiwi", "grape"]));
