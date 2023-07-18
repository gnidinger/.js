let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let arr = Array.from({ length: 5 }, () => Array(15).fill(''));

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < input[i].length; j++) {
        arr[i][j] = input[i].charAt(j);
    }
}

let result = '';

for (let j = 0; j < 15; j++) {
    for (let i = 0; i < 5; i++) {
        result += arr[i][j];
    }
}

console.log(result);
