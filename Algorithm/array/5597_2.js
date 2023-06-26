const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = Array.from({ length: 30 }, (_, index) => index + 1);

rl.on('line', (line) => {
    const complete = Number(line);
    input = input.filter((n) => n !== complete);
}).on('close', () => {
    input.forEach((a) => console.log(a));
    process.exit(0);
});
