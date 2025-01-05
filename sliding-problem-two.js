// Maximum Sum of fixed sub array of size k
function maxSumSubArray(arr, k) {
  let maxSum = 0;
  let sum = 0;
  if (arr.length < k) {
    return 0;
  }
  for (let i = 0; i < k; i++) {
    sum += arr[i];
    maxSum = sum;
  }
  for (let j = k; j < arr.length; j++) {
    sum += arr[j] - arr[j - k];
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}

let arr = [2, 5, 6, 3, 4, 6, 4, 3, 2, 4];
console.log(maxSumSubArray(arr, 4));
