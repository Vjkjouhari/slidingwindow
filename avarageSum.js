function avgSumSubArray(arr, k) {
  let result = [];
  let sum = 0.0;
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      result.push(sum / k);
      sum -= arr[start];
      start++;
    }
  }
  return result;
}
let arr1 = [2, 5, 6, 3, 4, 6, 4, 3, 2, 4];
console.log(avgSumSubArray(arr1, 4));

// maximmum of avg of sub array
function maxAvgSumSubArray(arr, k) {
  let currentAvg = 0.0;
  let sum = 0.0;
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      if (sum / k > currentAvg) {
        currentAvg = sum / k;
      }
      sum -= arr[start];
      start++;
    }
  }
  return currentAvg;
}
let arr = [2, 5, 6, 3, 4, 6, 4, 3, 2, 4];
console.log(maxAvgSumSubArray(arr, 4));

// keep track of elements envolve in making maximum avg
function elementTrack(arr, k) {
  let ele = [];
  let tempEle = [];
  let sum = 0.0;
  let avg = 0.0;
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    tempEle.push(arr[i]);
    if (i >= k - 1) {
      if (sum / k > avg) {
        ele = [...tempEle];
        avg = sum / k;
      }
      sum -= arr[start];
      tempEle.shift();
      start++;
    }
  }
  return JSON.stringify({ ele, maxAvg: avg });
}
let arr3 = [2, 5, 6, 3, 4, 6, 4, 3, 2, 4];
console.log(elementTrack(arr, 4));
