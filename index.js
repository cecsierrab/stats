// create a promt saying `Enter numbers seperated by commas:`
const userInput = prompt(`Please enter numbers seperated by commas, '1,2,3,4,...'`)

// convert the user input into an array of individual strings
const userInputArray = userInput.split(`,`);

// create a variable `numbers` and set it to an empty array
const numbers = [];

// go through `numberStrings`
for(let i = 0; i < userInputArray.length; i++ ) {
const numAsStr = userInputArray[i];
  // create a variable called convertedNumber that converts the string into a number
  const convertedNum = Number(numAsStr);
  // add the convertedNumber to numbers
  numbers.push(convertedNum);
}
 
// create a function called `getLength`
  // `getLength` takes in an array of numbers
const getLength = (nums) => {
// gets the length of the numbers array using the length method
  const numsLength = nums.length;
  // return the length
  return numsLength;
}


// create a function called `getSum`
// `getSum` takes in an array of numbers
const getSum = (nums) => {
  // create a variable `total`
  let total = 0;
// iterate over the numbers in the array
  for(let i = 0; i < nums.length; i++) {
  // add each number to the `total`
    const number = nums[i];
    total += number;
  }
// return `total`
  return total;
}


// create a function called `getMean`
// `getMean` takes in an array of numbers
const getMean = (nums) => {
  // divide the getSum by the getLength
  const dividend = getSum(nums) / getLength(nums);
  // return the dividend
  return dividend;
}




// create a function called `getMin`
// `getMin` takes in an array of numbers
const getMin = (nums) => {
  // create a variable called `lowestNum` set to the first number in the array
  let lowestNum = [i];
// go through each number
for(let i = 0; i < nums.length; i++) {
// compare the current number to `lowestNum`
  // if the current number is lower than the `lowestNum`
  if(nums < lowestNum){

  }
 
}
  
// return `lowestNum`
 


}

getMin();



// create a function called `getMax`
// getMax takes in an array of numbers
//create a variable called `highestNum` set to the first numner in the arrary
// go through each number
  //compare the current number to the highest number
  // if the current number is higher than the highestNum
    //replace the highestNum with the current number
// return the highestNum

//create a function called `getRange`
// getRange takes in an arrary of numbers
// return getMax minus the getMin

// create a function called getEvens
// getEvens takes in an arrary of numbers
// create a variable called evens that is set to 
// go through each number
  // figure out if the number is even
  // if the number is even 
    // add it to then `evens` array
// return `evens`

//create a function called getOdds
// getOdds takes in an array of numbers
// create a variablee called odds that is set to array
// go through each number
  //figure out if the number is odd
  //if the number is odd
    // then add it to the odds array
// return odds array



