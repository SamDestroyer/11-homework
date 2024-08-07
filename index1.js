const arr = [1, 2, 3, 0, 55, 67, 77, NaN, null];
let even = 0;
let odd = 0;
let zeroCounterStr = "", zeroCounter = 0;

function evenOddCounter(item) {
    if (typeof item == "number" && !(isNaN(item))) {
        if (item % 2 === 0) {
            even++
            if (item === 0) {
                zeroCounter++
                zeroCounterStr = `Также есть ${zeroCounter} нулей`;
            }
        } else {
            odd++
        }
    }
}

for (let element of arr) {
    evenOddCounter(element)
}

console.log(`В массиве ${even} чётных элементов и ${odd} нечётных. ` + zeroCounterStr)