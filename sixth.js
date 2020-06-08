const sumSquareDifference = (n) => {
    let individualSquareSum = 0;
    let wholeSquareSum = 0;

    for(let i = 1; i <= n; i++) {
        individualSquareSum += i**2;
        wholeSquareSum += i;
    }

    wholeSquareSum = wholeSquareSum ** 2;

    return wholeSquareSum - individualSquareSum;
}

console.log(sumSquareDifference(100));