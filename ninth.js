const isTriplet = (a, b, c) => {
    if(a**2 + b**2 === c**2) return true;
    return false;
}

const specialPythagoreanTriplet = (n) => {
    let product = 0;

    for(let c = 1; c < n; c++) {
        for(let b = 1; b < n; b++) {
            for(let a = 1; a < n; a++) {
                if((a + b + c) === n) {
                    if(isTriplet(a, b, c)) {
                        product = a * b * c;
                    }
                }
            }
        }
    }

    return product;
}

console.log(specialPythagoreanTriplet(1000));