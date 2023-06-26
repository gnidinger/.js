const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let x = 0;
let input = [];

rl.on('line', (line) => {
    if (x === 0) {
        x = parseInt(line.split(' ')[1]);
    } else {
        input = line.split(' ').map(Number);
        rl.close;
    }
}).on('close', () => {
    const result = input.filter((num) => num < x).join(' ');
    console.log(result);
});
