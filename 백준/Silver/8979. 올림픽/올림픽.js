const fs = require("fs");

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(" ").map(Number);
let countries = [];

for (let i = 1; i <= n; i++) {
  let [country, gold, silver, bronze] = input[i].split(" ").map(Number);
  countries.push({ country, gold, silver, bronze });
}

countries.sort((a, b) => {
  if (b.gold !== a.gold) return b.gold - a.gold;
  if (b.silver !== a.silver) return b.silver - a.silver;
  return b.bronze - a.bronze;
});

let rank = 1;
let ranks = {};
ranks[countries[0].country] = rank;

for (let i = 1; i < n; i++) {
  if (
    countries[i].gold === countries[i - 1].gold &&
    countries[i].silver === countries[i - 1].silver &&
    countries[i].bronze === countries[i - 1].bronze
  ) {
    ranks[countries[i].country] = rank;
  } else {
    rank = i + 1;
    ranks[countries[i].country] = rank;
  }
}

console.log(ranks[k]);
