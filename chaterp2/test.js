// 2중 배열이 아닌, 하나의 배열로 통합한다.
// 배열 안의 배열에 있는 숫자들은 순서를 뒤바꾼다.

var arr1 = [
  [2, 1],
  [4, 3],
];
var arr2 = [[3, 2, 1], [5, 4], [6]];
var arr3 = [[3], [4, 5], [6], [7], [8, 9, 10]];

function restoreArray(arr) {
  var returnArr = [];

  // 0부터 1까지. i + 1
  for (var i = 0; i < arr.length; i++) {
    arr[i].reverse();
    for (var x = 0; x < arr[i].length; x++) {
      returnArr.push(arr[i][x]);
    }
  }

  return returnArr;
}

console.log(restoreArray(arr1));
console.log(restoreArray(arr2));
console.log(restoreArray(arr3));
