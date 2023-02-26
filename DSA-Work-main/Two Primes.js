
function twoPrimes(a,b) {
    //write code here
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  if (isPrime(a) && isPrime(b)) {
    console.log("True");
  } else {
    console.log("False");
  }
}