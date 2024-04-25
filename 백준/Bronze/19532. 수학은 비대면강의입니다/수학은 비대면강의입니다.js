const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[0].split(' ').map(Number);

const [a,b,c,d,e,f] = arr;
const minVal = -999;
const maxVal = 999;
for (let x = minVal; x <= maxVal; x++) {
    for (let y = minVal; y <= maxVal; y++) {
        if (a * x + b * y !== c) {
            continue;
        }
        if (d * x + e * y === f) {
            console.log(x, y);
            solutionFound = true;
            break;
        }
    }
}