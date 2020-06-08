const palindromeCheck = (num) => {
    let stringNum = num.toString();
    stringNum = stringNum.split("");
    stringNum = stringNum.map((num) => parseInt(num));

    let reverseNum = [];

    for(let i = 1; i <= stringNum.length; i++) {
        reverseNum.push(stringNum[stringNum.length - i]);
    }

    if(JSON.stringify(stringNum) === JSON.stringify(reverseNum)) {
        return true;
    }

    return false;
}

const largestPalindromeProduct = (n) => {
    let palindromes = [];

    for(let i = 1; i <= 10**n; i++) {
        for(let j = 1; j <= 10**n; j++) {
            if(palindromeCheck(i*j)) {
                palindromes.push(i*j);
            }
        }
    }

    return palindromes[palindromes.length - 1];
}

console.log(largestPalindromeProduct(3));