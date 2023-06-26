const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = 0;
let m = 0;
let baskets = [];

rl.on('line', (line) => {
    if (n === 0) {
        [n, m] = line.split(' ').map(Number);
        for (let i = 0; i <= n; i++) {
            baskets[i] = i;
        }
    } else {
        const [i, j] = line.split(' ').map(Number);

        let temp = baskets[i];
        baskets[i] = baskets[j];
        baskets[j] = temp;

        m--;

        if (m === 0) {
            rl.close();
        }
    }
}).on('close', () => {
    for (let i = 1; i <= n; i++) {
        process.stdout.write(`${baskets[i]} `);
    }

    process.exit(0);
});
