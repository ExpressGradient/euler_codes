const fiboEvenSum = (n) => {
    let ops = {
        first: 1,
        second: 2
    }
    
    let fibos = [1, 2];

    let final_even_sum = 0;

    while(fibos[fibos.length - 1] < n) {
        fibos.push(ops.first + ops.second);
        ops = {
            first: ops.second,
            second: ops.first + ops.second 
        }
    }

    fibos.pop();

    fibos.forEach((fibo) => {
        if(fibo % 2 === 0) {
            final_even_sum += fibo;
        }
    });

    return final_even_sum;
}

console.log(fiboEvenSum(10));