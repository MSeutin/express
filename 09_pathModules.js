const path = require("path");

// find the platform separator
console.log(path.sep);

// join two paths
const filePath = path.join("/100_folder1", "01_subfolder1", "test.txt");
console.log(filePath);

// find basename of a path
const base = path.basename(filePath);
console.log(base);

// resolve to absolute path
const absolute = path.resolve(__dirname, "test.txt");
console.log(absolute);

// present current working directory
console.log(process.cwd());
