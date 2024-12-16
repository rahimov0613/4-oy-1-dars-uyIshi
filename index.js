function mathAdd(a, b) {
    return a + b
}
console.log(mathAdd(1, 2));

function mathSub(a, b) {
    return a - b
}
console.log(mathSub(4, 2));

function mathMul(a, b) {
    return a * b
}
console.log(mathMul(2, 3));

function mathDiv(a, b) {
    return a / b
}
console.log(mathDiv(10, 2));

module.exports = { mathAdd, mathSub, mathMul, mathDiv }