const { readFileSync, writeFileSync } = require("fs");

// Synchronous method:
// Reading file contents
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

// Writing to a file.
writeFileSync('./content/result-sync.txt', `Result: ${first} ${second}`)