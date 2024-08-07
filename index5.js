let num1 = 5;
let num2 = 10;

const arrFunc = (num1, num2) => {
    let result = 1
    for (let i = 0; i < num2; i++) {
        result *= num1
    }

    return result
}

console.log(arrFunc(num1, num2))