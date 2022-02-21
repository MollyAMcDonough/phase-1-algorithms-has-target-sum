
/*
function subArray(array, target, start, end) {
  if (start > end) {
    return array;
  }
  let mid = Math.floor((start + end)/2);

  if (array[mid] === target) {
    array.splice(mid + 1);
    return array;
  }

  if (array[mid] > target) {
    array.splice(mid);
    return subArray(array, target, start, mid-1);
  } else {
    return subArray(array, target, mid+1, end);
  }
}
*/

function recursiveSum(array, i, target, start, end) {
  if (start > end) {
    return false;
  }
  let mid = Math.floor((start + end)/2);
  if (array[mid] + array[i] === target) {
    return true;
  }

  if (array[mid] + array[i] > target) {
    return recursiveSum(array, i, target, start, mid-1);
  } else {
    return recursiveSum(array, i, target, mid+1, end);
  }
}

function hasTargetSum(array, target) {
  // Write your algorithm here
  let newArray = [...array];
  newArray.sort((a,b) => a-b);
  //get rid of any numbers greater than target in logN fashion
  //newArray = subArray(newArray, target, 0, newArray.length-1);
  let i = 0;
  let found = false;
  while (!found && i < newArray.length - 1) {
    found = recursiveSum(newArray, i, target, i+1 , newArray.length-1);
    i++;
  }
  return found;
}

/* 
  Write the Big O time complexity of your function here
  sort?? plus 2logN = sort + logN
*/

/* 
  Add your pseudocode here
  Sort array. 
  Get rid of any numbers greater than target in logN fashion.
  Check sums in logN fashion.

*/

/*
  Add written explanation of your solution here
  takes an array of number and a number to check
  returns true if any two numbers in the array have a 
  sum equal to the given number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, -7], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
