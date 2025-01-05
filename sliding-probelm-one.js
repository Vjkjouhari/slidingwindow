// sliding windows Problems
// Maximum Sum of Distinct Subarrays With Length K

function maxSumSubarray(nums, k) {
  let maxSum = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
    maxSum = sum;
  }

  for (let i = k; i < nums.length; i++) {
    sum += arr[i] - arr[i - k];
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}

// let arr = [1, 5, 4, 2, 9, 9, 9];
// // 1,5,4   5 4 2, 4,2,9  2,9,9   9,9,9
// let k = 3;
// console.log(maxSumSubarray(arr, k));

function maxSumSubArrayDistinctEle(arr, k) {
  let freq = {};
  let maxSum = 0;
  let currentSum = 0;
  let left = 0;
  let resultSubArray = [];
  let tempSubArray = [];
  for (let right = 0; right < arr.length; right++) {
    const current = arr[right];
    if (freq[current] === undefined) {
      freq[current] = 0;
    }
    freq[current]++;
    currentSum += current;
    tempSubArray.push(current);

    while (freq[current] > 1 || tempSubArray.length > k) {
      const leftEle = arr[left];
      freq[leftEle]--;
      currentSum -= leftEle;
      tempSubArray.shift();
      if (freq[leftEle] === 0) {
        delete freq[leftEle];
      }
      left++;
    }

    if (tempSubArray.length === k && currentSum > maxSum) {
      maxSum = currentSum;
      resultSubArray = [...tempSubArray];
    }
  }

  return JSON.stringify({ maxSum, resultSubArray });
}

let arr = [1, 5, 2, 1, 4, 2, 4, 8, 9, 8, 9];
// 1,5,4   5 4 2, 4,2,9  2,9,9   9,9,9
let k = 3;
console.log(maxSumSubArrayDistinctEle(arr, k));
