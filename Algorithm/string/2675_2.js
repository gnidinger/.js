const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const t = Number(input[0]);

    for (let i = 1; i <= t; i++) {
        const [r, s] = input[i].split(' ');

        let result = '';

        for (let j = 0; j < s.length; j++) {
            result += s[j].repeat(Number(r));
        }

        console.log(result);

        rl.close();
    }
});
