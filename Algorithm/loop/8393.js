const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    result = 0;
    const a = parseInt(line);

    for (let i = 1; i <= a; i++) {
        result = result + i;
    }

    console.log(result);

    rl.close();
});
