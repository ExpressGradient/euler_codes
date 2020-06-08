const checkPrime = (num) => {
    if(num <= 1) return false;

    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }

    return true;
}

const nthPrime = (n) => {
    let primes = [];
    let counter = 1;

    while(primes.length !== n) {
        if(checkPrime(counter)) {
            primes.push(counter);
        }

        counter++;
    }

    return primes[primes.length - 1];
}

console.log(nthPrime(10001));