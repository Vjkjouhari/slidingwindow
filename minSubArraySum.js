// Find minimum sub array sum of size k
function minSumSubArray(arr, k) {
  if (arr.length < k) return 0;
  let minSum = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
    minSum = sum;
  }
  for (let j = k; j < arr.length; j++) {
    sum += arr[j] - arr[j - k];
    if (sum < minSum) {
      minSum = sum;
    }
  }
  return minSum;
}

let arr = [2, 5, 6, 3, 4, 6, 4, 3, 2, 4];
console.log(minSumSubArray(arr, 3));
