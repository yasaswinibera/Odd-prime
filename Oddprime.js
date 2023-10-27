
// This is my implementation for printing One-digit-difference prime numbers.
/*The one-digit-difference prime numbers are those which have the difference 
between consective digits of the number as one and also the number has to be prime.*/

/**This is a function to check whether the number is prime or not
 * @param number takes input number to check if it is prime or not
 * @return true if it is prime or false if it is not prime
*/
 
function isPrime(number) 
{
    let sqrtnum=Math.floor(Math.sqrt(number))
    let prime = number != 1
    for(let i=2; i<sqrtnum+1; i++) 
    { 
        if(number % i == 0) 
        {
            prime = false
            break
        }
    }
    return prime  //return true if it is prime
}

/**This a function to verify whether the consecutive digits in the input number
 * has the difference as one between them.
 *@param number takes the number as function parameter.
 *@return the boolean value*/

function oddCheck(number)
{
    let difference = 0
    let result 
    const digits = String(number).split('').map(Number)
    for(let i=1;i<(digits.length);i++)
        {
            difference = digits[i-1]-digits[i]
            if (difference === 1 || difference === -1)
            {
              result = 0  
            }
            else
            {
               result = 1
            }
        }
    return result
}
 /**This is a function to create an array with numbers that are satisfying
  one-digit-difference and prime number*/
function oddPrimeNumber()
  {
    //creating an empty array to store numbers.
    let result = []
    let count=0
    for (let i=0 ;i <= 10000000;i++)
    {
        if (oddCheck(i) === 0 && isPrime(i) ===true)
        {
            result.push(i)    //adding the number into the array.
            count++
        }
    }
    console.log(`The count of the numbers are ${count}`)
    console.log("The list of the numbers that are ODD-Prime is")
    return result    // returns the resultant array of numbers.
  }
  // printing the numbers that are prime and having one-digit-difference.
  console.log(oddPrimeNumber())
   

