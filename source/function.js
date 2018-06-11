function calculaTax(amount) {
    let result = amount * 0.0825;
    return result;
}
let tax = calculaTax(100);
console.log(tax);