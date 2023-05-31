const { readFile, writeFile } = require("fs");

// Asynchronous method:
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err) {
            console.log(err);
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Result: ${first} ${second}`,
            (err, result) => {
                if(err) {
                    console.log(err);
                }
                console.log(result);
            }
        )
    })
})