
// This is my implementation for printing One-digit-difference prime numbers

/**This is a function to check whether the number is prime or not*/
 
function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
      var prime = num != 1;
      for(var i=2; i<sqrtnum+1; i++) { 
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;  //return true if it is prime
  }
  // This a function to verify whether the number has one-digit-difference
  function check(number)
  {
    let sum = 0
    let flag
    const digits = String(number).split('').map(Number)
  for(let i=1;i<(digits.length);i++)
  {
    sum = digits[i-1]-digits[i]
    if (sum === 1 || sum === -1){
        flag = 0
    }
    else{
        flag = 1
    }
  }
  return flag
  }
 /*This is a function create an array with numbers that are satisfying
  one-digit-difference and prime number*/
  function OneDigitDifference()
  {
     let result = []
    
     for (let i=0 ;i <= 10000000;i++){
       
         if (check(i) === 0 && isPrime(i) ===true)
         {
            result.push(i)    //adding the number into the array
         }
     }
     return result
  }
  // printing the numbers that are prime and having one-digit-difference
  console.log("The list of numbers that have one-digit-difference and prime are")
  console.log(OneDigitDifference())
