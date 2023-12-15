function isPrime(num) {
    if (num <= 1) return false
    for(let x = 2; x <= Math.sqrt(num); x++) {
        if(num % x === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(7))         //é primo
console.log(isPrime(29))        //é primo
console.log(isPrime(1684864))   //não é primo

// coded by: De Gobbi (andre10degobi)