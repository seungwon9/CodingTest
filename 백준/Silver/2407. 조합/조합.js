function calculateCombination(n, m) {
    // nCm = n! / (m! * (n-m)!)
    let numerator = BigInt(1);  // 분자 n!
    let denominator = BigInt(1);  // 분모 m! * (n-m)!

    for (let i = 0; i < m; i++) {
        numerator *= BigInt(n - i);  // n * (n-1) * ... * (n-m+1)
        denominator *= BigInt(i + 1);  // m!
    }

    return numerator / denominator;  // nCm 계산
}

// 입력 받기 예시 (Node.js 환경에서 파일 또는 표준 입력을 사용할 경우)
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// 로컬 파일을 사용할 경우 예: const input = fs.readFileSync('example.txt').toString().trim().split(' ');

const n = parseInt(input[0]);
const m = parseInt(input[1]);

console.log(String(calculateCombination(n, m)));