"use strict"
//Задание №1
function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) { }
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(500); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  return (arr1.length === arr2.length) && arr1.every((item, index) => item === arr2[index]);
}

function memorize(fn, limit) {
  let arr = [];
  return (...args) => {
    let test = results.find(item => compareArrays(item.args, Array.from(args)));

    if (test) {
      return arr.arr;
    } else {
      let result = fn(...args);
      arr.push({
        args: Array.from(args),
        arr: result
      })

      if (arr.length > limit) {
        arr.shift();
      }

      return arr;
    }
  }
}

function testCase(testFunction, timer) {
  let items = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];

  console.time(timer);

  let i = 0;
  while (i <= 100) {
    items.forEach(item => testFunction.apply(items));
    i++;
  }

  console.timeEnd(timer);
}
