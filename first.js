const multiplesOf3and5 = (number) => {
    let three_counter = 0;
    let three_multiple = 3;
    let three_multiples = [];

    let five_counter = 0;
    let five_multiple = 5;
    let five_multiples = [];

    let results = [];
    let final_sum = 0;

    while(number > three_multiple) {
        three_counter++;
        three_multiples.push(three_multiple);
        three_multiple = 3 * (three_counter + 1);
    }

    while(number > five_multiple) {
        five_counter++;
        five_multiples.push(five_multiple);
        five_multiple = 5 * (five_counter + 1);
    }

    results = [...three_multiples, ...five_multiples];
    results = [...new Set(results)];
    results.forEach((result) => final_sum += result);

    return final_sum;
}

console.log(multiplesOf3and5(1000));