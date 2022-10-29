
// Question 3
/**
  Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not
*/

function checkEven(num){
  if(num % 2 === 0){
    return true
  }
  
  return false
}

function isEven(aNum, callback){
  return callback(aNum);
}

console.log(isEven(2, checkEven)) // true
console.log(isEven(3, checkEven)) // false
