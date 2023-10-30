
// This is my implementation for printing One-digit-difference prime numbers.

/*The one-digit-difference prime numbers are those which have the difference 
 as one between consecutive digits of the number  
and also the number has to be prime.*/

/**This is a function to check whether the number is prime or not
 * @param {Number} number takes input number to check if it is prime or not
 * @return true if it is prime or false if it is not prime
*/
 
function isPrime(number) 
{
    let sqrtnum = Math.floor(Math.sqrt(number))
    let prime = number != 1
    for(let i = 2; i < sqrtnum + 1; i++) 
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
 * has the difference one between them.
 *@param {Number} number takes the input number for ODD check.
 *@return the value 1 if the number is ODD or 0 if it is not ODD*/

function oddCheck(number)
{
    let difference = 0
    let result 
    const digits = String(number).split('').map(Number)
    for(let i = 1 ; i < (digits.length) ; i++)
    {
        difference = digits[i-1] - digits[i]
        if (difference === 1 || difference === -1)
        {
           result = 0  
        }
        else
        {
           result = 1
        }
    }
 //return the value 1 if number is ODD or 0 if number is not ODD.
    return result
}

 /**This is a function to create an array with numbers that are satisfying
  one-digit-difference and prime number.*/

function oddPrimeNumber()
  {
    //creating an empty array to store numbers.
    let result = []
    let count = 0
    for (let i = 0 ; i <= 10000000 ; i++)
    {
        //condition for checking whether the number is both prime and ODD.
        if (oddCheck(i) === 0 && isPrime(i) ===true)
        {
            //adding the number into the array.
            result.push(i)    
            count++
        }
    }
    // printing the total count of ODD-Prime numbers.
    console.log(`The count of the numbers are ${count}`)
   //printing the list of ODD-Prime numbers.
    console.log("The list of the numbers that are ODD-Prime is")
    // returns the resultant array of numbers that are ODD-Prime.
    return result   
  }
  // printing the numbers that are prime and having one-digit-difference.
  console.log(oddPrimeNumber())
   

