// Question 1
/**
 Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. 
 Once the value is 0 it should log "DONE!" and stop.
*/

function countDown(num){
  const clearTimer = setInterval(function(){
    num--;
    if(num < 1){
      console.log("DONE!");
      clearInterval(clearTimer);
    } else {
      console.log(num)
    }
  }, 1000) 
}


countDown(4)

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


// Question 4
/**
  Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not
*/

function checkOdd(num){
  if(num % 2 === 0){
    return false
  }
  
  return true
}

function isOdd(aNum, callback){
  return callback(aNum);
}


console.log(isOdd(3, checkOdd)) // true

console.log(isOdd(14, checkOdd)) // false


// Question 5
/**
  Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only 
  be divided in whole by itself and 1), otherwise returns false
*/

function checkPrime(num){
  // number less than 2 are not prime number including negative number
  if(num < 2){
    return false;
  }
  
  for(let i = 2; i < num; i++){
    // check if it is divisible by other number apart from it self
    if(num % i === 0){ 
      return false;
    }
  }
  
  return true; // esle the nume is a prime number
}


function isPrime(aNum, callback){
  return callback(aNum);
}


console.log(isPrime(8, checkPrime)) // false
console.log(isPrime(17, checkPrime)) // true


// Question 6
/**
  Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it
*/

function numberFact(aNum, callback){
  return callback(aNum);
}

console.log(numberFact(59, isEven)); // false
//console.log(numberFact(59, isOdd)); // true
//console.log(numberFact(59, isPrime)); // true



// Question 7
/**
  Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.
*/
function find(anArray, callback){
  for(let i = 0; i < anArray.length; i++){
    //let result = callback(anArray[i])
    
    if(callback(anArray[i])){
      return anArray[i]
    }
  }
  
}

console.log(find([8,11,4,27], function(val){return val >= 10})); // 11
console.log(find([8,11,4,27], function(val){return val === 5})); // undefined



// Question 8
/**
  Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array 
  that matches the condition.
*/

function findIndex(anArray, callback){
  for(let i = 0; i < anArray.length; i++){
    //let result = callback(anArray[i])
    
    if(callback(anArray[i])){
      return i
    }
  }
  
}


console.log(findIndex([8,11,4,27], function(val){return val >= 10})); // 1
console.log(findIndex([8,11,4,27], function(val){return val === 5})); // undefined



// Question 9
/**
  Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return 
  the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another 
  parameter to return the product. You will have to use closure and arguments to solve this.
*/

function specialMultiply(num1, num2){
  if(arguments.length === 2){
    return num1 * num2;
  }
  return function inner(num2){
    return num1 * num2;
  }
}


console.log(specialMultiply(3)(4)) // 8
console.log(specialMultiply(3, 4)) // 12
console.log(specialMultiply(3)) // function inner(num2){ return num1 * num2; }
