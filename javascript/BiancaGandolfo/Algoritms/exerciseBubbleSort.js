// Пузырьковая сортировка
"use strict";
var sortArr = (function bubleSort(arr) {
  var arrayOfElements = arr;
  var actions = 0;
  for (var j = 0; j < arrayOfElements.length - 1; j = j + 1) {
    var times = 0;
    for (var i = 0; i < arrayOfElements.length - 1; i = i + 1) {
      if (arrayOfElements[i] > arrayOfElements[i + 1]) {
        console.log(
          "swaping " + arrayOfElements[i] + " with " + arrayOfElements[i + 1]
        );
        var memory = arrayOfElements[i];
        arrayOfElements[i] = arrayOfElements[i + 1];
        arrayOfElements[i + 1] = memory;
        times = times + 1;
        actions = actions + 1;
      } else {
        times = times + 1;
        actions = actions + 1;
        console.log("nothing to sort");
      }
    }
  }
  return arr;
})([1, 4, 2, 5]);

console.log(sortArr);
