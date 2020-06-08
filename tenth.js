const checkPrime = (num) => {
    if(num <= 1) return false;

    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }

    return true;
}

const primeSummation = (n) => {
    let primeSum = 0;

    for(let i = 1; i < n; i++) {
        if(checkPrime(i)) {
            primeSum += i;
        }
    }

    return primeSum;
}

console.log(primeSummation(2000000));