/**
 * @param {string} s
 * @return {number}
 */

// Split the string
// Keep it in order
// Have each numberal mapped to its appropriate number
// Check to see if the next numeral is greater than the current one
  // If it is, the number should be the next numeral minus the current one

 const romanToInt = function(s) {
  let str = s.split("");
  let numerals = [];
  let nums = [];
  let result = 0;
  
  for (let i = 0; i < str.length; i++) {
      numerals.push(charMap[str[i]]);
  }
    
  for (let i = 0; i < numerals.length; i++) {
    let j = i + 1;
      if (numerals[i] < numerals[j]) {
          console.log('boof');
          nums.push(numerals[j] - numerals[i]);
          i++;
      } else {
          nums.push(numerals[i])
      }
  };
    
  for (let i = 0; i < nums.length; i++) {
      result = result + nums[i];
  };
  
  return result;
};
  
let charMap = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}

// romanToInt("IV");
