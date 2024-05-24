const fs = require("fs");

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]); // 수정됨
const expression = input[1].trim();
const values = input.slice(2, 2 + n).map(Number); // 수정됨

const map = new Map();
for (let i = 0; i < n; i++) {
  const variable = String.fromCharCode(65 + i); // 수정됨: A, B, C, ...
  map.set(variable, values[i]);
}

const stack = [];
const operators = ["+", "-", "*", "/"];

for (let i = 0; i < expression.length; i++) {
  const token = expression[i];

  if (map.has(token)) {
    stack.push(map.get(token)); // 수정됨: 피연산자 값을 스택에 푸시
  } else if (operators.includes(token)) {
    const b = stack.pop();
    const a = stack.pop();
    let result;

    switch (token) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = a / b;
        break;
    }

    stack.push(result);
  }
}

const result = stack.pop();
console.log(result.toFixed(2));
