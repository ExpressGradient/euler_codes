const gcd2 = (num1, num2) => {
    if(!num2) {
        return num2 === 0 ? num1 : NaN;
    }
    
    return gcd2(num2, num1 % num2);
}

const gcd = (nums) => {
    let n = 0;

    for(let i = 0; i < nums.length; i ++) {
        n = gcd2(nums[i], n)
    }

    return n;
}

const lcm2 = (num1, num2) => (num1 * num2 / gcd2(num1, num2));

const smallestMult = (n) => {
    let nums = [];
    let lcm = 1;

    for(let i = 1; i <= n; i++) {
        nums.push(i);
    }

    for(let i = 0; i < nums.length; ++i) {
        lcm = lcm2(nums[i], lcm);
    }

    return lcm
}

console.log(smallestMult(20));