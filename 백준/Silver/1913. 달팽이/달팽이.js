const fs = require("fs");

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const k = +input[1];

const arr = Array.from(Array(n), () => Array(n).fill(0));

let x = Math.floor(n / 2);
let y = Math.floor(n / 2);
let num = 1;
const answer = num === k ? [x + 1, y + 1] : [];
arr[x][y] = num;
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let iter = 1;
let dir = 0;
while (num < n * n) {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < iter; j++) {
      num += 1;
      x += dx[dir];
      y += dy[dir];
      if (x < 0 || y < 0 || x >= n || y >= n) {
        break;
      }
      arr[x][y] = num;
      if (num === k) {
        answer.push(x + 1, y + 1);
      }
    }
    dir = (dir + 1) % 4;
  }
  iter += 1;
}
arr.forEach((row) => console.log(row.join(" ")));
console.log(answer.join(" "));
