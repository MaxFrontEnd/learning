// [1, 3, 2, 5, 4];
// var sortedWithSelection = (function sortSelection(arr) {
//   var cut = arr.length - 1;
//   for (var j = 1; j < cut - 1; j = j + 1) {
//     var bigone = arr[j - 1];
//     var index = j - 1;
//     for (i = 0; i < cut; i = i + 1) {
//       var temp = arr[i];
//       if (arr[i + 1] > bigone) {
//         bigone = arr[i + 1];
//         index = i + 1;
//         temp = arr[index];
//       }
//     }
//     console.log(index);
//     console.log(arr[cut]);
//     arr[index] = arr[cut];
//     arr[cut] = bigone;
//     cut = cut - 1;
//     console.log(bigone);
//   }
//   return arr;
// })([22, 1, 2, 5, 4, 9, 6, 10, 3]);

// console.log(sortedWithSelection);

arr = [2, 4, 1, 3];
var len = arr.length;
var temp = 0;
for (var j = 0; j < len; ++j) {
  for (var i = j + 1; i < len; ++i) {
    if (arr[j] > arr[i]) {
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
}

console.log(arr);

// function selectionSort(arr) {
//   var temp = 0;
//   for (var i = 0; i < arr.length; ++i) {
//     for (var j = i + 1; j < arr.length; ++j) {
//       if (arr[i] > arr[j]) {
//         // compare element with the reset of other element
//         temp = arr[i]; // swap the valuse from smallest to gretest
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(selectionSort([2, 4, 1, 3]));
