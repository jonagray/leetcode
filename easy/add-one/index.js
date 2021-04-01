// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Example 3:

// Input: digits = [0]
// Output: [1]

/**
 * @param {number[]} digits
 * @return {number[]}
 */

 var plusOne = function(digits) {
  // I couldn't do this challenge by converting it to a number and just adding one, specifically because when faced with a number that is greater than 16 digits, javascript freaks out.
  
  let i = digits.length - 1;
  let toAdd = 1;
  
  while (toAdd > 0 && i >= 0) {
      if (digits[i] < 9) {
          digits[i] = digits[i] + toAdd;
          toAdd = 0; // break out of loop
      } else { // what do do if there is a 9
          digits[i] = 0;
      }
      i--;
  }
  
  if (toAdd > 0) { // toAdd should only be 1 if we are doing weird stuff with a 9
      digits.unshift(toAdd); // take first digit in the number and replace it with a 1
  }
  return digits;
};
