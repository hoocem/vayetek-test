/**
 * returns index of the rotation point of a rotated sorted array of numbers, -1 if the array is not rotated (sorted)
 * @param {array} arr
 * @return {number}
 */
function getRotationPoint(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (end >= start) {
    const mid = Math.floor((start + end) / 2);

    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (mid > start && arr[mid] < arr[mid - 1]) {
      return mid - 1;
    } else if (arr[start] >= arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

function binarySearch(arr, start, end, k) {
  if (!arr.length) return -1;

  while (end >= start) {
    const mid = Math.floor((start + end) / 2);

    if(arr[mid] === k) {
      return mid;
    }else if (k < arr[mid]) {
      end = mid -1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

function search(arr, k) {
  const rotationPoint = getRotationPoint(arr);
  if (rotationPoint < 0) return binarySearch(arr, 0, arr.length - 1, k);

  if (arr[rotationPoint] === k) {
    return rotationPoint;
  } else if (arr[0] <= k) {
    // search on the left sub array
    return binarySearch(arr, 0, rotationPoint - 1, k)
  } else {
    // search on the right subarray
    return binarySearch(arr, rotationPoint + 1, arr.length - 1, k)
  }
}

// search tests
console.log(search([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 5)); // 8
console.log(search([3, 4, 5, 1, 2], 1)); // 3
console.log(search([5, 6, 7, 8, 9, 10], 8)); //3
console.log(search([5, 6, 7, 8, 9, 10, 1, 2, 3], 3)); // 8
console.log(search([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 200)); // -1

// getRotationPoint tests
// console.log(getRotationPoint([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14])); // 4
// console.log(getRotationPoint([3, 4, 5, 6, 1, 2])); // 3
// console.log(getRotationPoint([1, 3, 4, 5, 7, 10, 14])); // -1
