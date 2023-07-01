// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const { Michael, Susan, Bob } = require("./04_names");
const sayHi = require("./05_utils");

sayHi(Michael);
sayHi(Susan);
sayHi(Bob);

const data = require("./06_alternativeFlavor");

console.log(data.items);
console.log(data.singlePerson);

require("./07_mindGrenade");
