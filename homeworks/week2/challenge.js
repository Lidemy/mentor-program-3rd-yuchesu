// 排序好的陣列 arr，裡面的元素都是正整數而且保證不會重複
// 函式 search 回傳 n 在這個陣列裡面的 index，沒有的話請回傳 -1
function search(arr, n) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (!(startIndex === endIndex && arr[startIndex] !== n)) {
    const midIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
    if (arr[midIndex] === n) return midIndex;
    if (arr[midIndex] > n) endIndex = midIndex - 1;
    else startIndex = midIndex + 1;
  }
  return -1;
}

console.log(search([1, 3, 10, 14, 39], 14));
console.log(search([1, 3, 10, 14, 39], 299));
