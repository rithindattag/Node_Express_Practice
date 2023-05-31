const path = require('path');

// path separator of the system(\)
console.log(path.sep);

// filepath of a file in the system
const filePath = path.join('/content', '/subfolder', '/test.txt');
console.log(filePath);

// basename of the file in the system
const base = path.basename(filePath);
console.log(base);

// absolute path of the file
const absolutePath = path.join(__dirname, '/content', '/subfolder', '/test.txt');
console.log(absolutePath);

