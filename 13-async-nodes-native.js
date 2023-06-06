const { readFile, writeFile } = require("fs").promises; // or add fs.promises in order to initialize promises instead of adding below 3 lines.
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// "Async Patterns - Node's Native Option"
const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-nodes-native",
      `Result: ${first}  ${second}`
    );
  } catch (error) {
    console.log(error);
  }
};
start();
