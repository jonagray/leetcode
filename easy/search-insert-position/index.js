// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const searchInsert = function(nums, target) {
  if (nums.includes(target)) {
      for (let i = 0; i < nums.length; i++) {
          if (target === nums[i]) {
              return i;
          }
      }
  } // This one takes care of any target that has a matching pair in the arr
  
  // Is the target greater than the last item in arr?
  if (target > nums[nums.length - 1]) {
      return nums.length;
  }
  
  // Is the target smaller than starting item in arr?
  if (target < nums[0]) {
      return 0;
  }
  
  // Other loop that goes through and places the target at the correct position in the arr
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) {
          return i;
      }
  }
};
