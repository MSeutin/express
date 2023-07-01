// synchronously = blocking
// asynchronously = non-blocking
// here we are using the synchronous way (blocking)
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./200_content/first.txt", "utf8");

const second = readFileSync("./200_content/second.txt", "utf8");

console.log(first, second);

///// WRITING TO FILES /////

// without appending
const content = `Your age is ${30 + 34}`;
writeFileSync("./200_content/third.txt", content);

const third = readFileSync("./200_content/third.txt", "utf8");

console.log(third);

// with appending
const content2 = `Nothing is ever accomplished by a reasonable man.`;

writeFileSync("./200_content/fourth.txt", content2, { flag: "a" });

const fourth = readFileSync("./200_content/fourth.txt", "utf8");

console.log(fourth);
