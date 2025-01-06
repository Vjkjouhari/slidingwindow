// sliding windows Problems
// Maximum Sum of Distinct Subarrays With Length K

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

let arr = [9, 9, 9, 1, 2, 3];
let k = 3;
console.log(maxSumSubArrayDistinctEle(arr, k));

// in Above problem we are storing the track of element but in below function we do not keep track of elements

function maxSumSubArrayDistinct(arr, k) {
  let freq = {};
  let maxSum = 0;
  let currentSum = 0;
  let start = 0;
  if (arr.length < k) return 0;
  for (let end = 0; end < arr.length; end++) {
    const currentEle = arr[end];
    if (freq[currentEle] === undefined) {
      freq[currentEle] = 0;
    }
    freq[currentEle]++;
    currentSum += currentEle;
    while (end - start + 1 > k || freq[currentEle] > 1) {
      const startEle = arr[start];
      freq[startEle]--;
      currentSum -= startEle;
      if (freq[startEle] === 0) {
        delete freq[startEle];
      }
      start++;
    }

    if (end - start + 1 === k || currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return JSON.stringify({ maxSum, freq });
}

let arr1 = [9, 9, 9, 1, 2, 3];
let k2 = 3;
console.log(maxSumSubArrayDistinct(arr1, k2));
