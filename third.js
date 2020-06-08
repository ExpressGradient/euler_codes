const checkPrimeNum = (num) => {
    if(num <= 1) return false;

    for(let i = 2; i < num; i++) {
        if(num % i === 0) return false;
    }

    return true;
}

const largestPrimeFactor = (number) => {
    let factor = 1;
    let factors = [];
    let primeFactors = [];

    while(factor <= number) {
        if(number % factor === 0) {
            factors.push(factor);
        }

        factor++;
    }

    factors.forEach((factor) => {
        if(checkPrimeNum(factor)) {
            primeFactors.push(factor);
        }
    });

    return primeFactors[primeFactors.length - 1];
}

const start = Date.now();

console.log(largestPrimeFactor(600851475143)); 

const end = Date.now();

console.log("Time taken: " + (end - start) + "ms");