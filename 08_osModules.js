// built-in module (no need to install)
// no need ./os.js so it knows it's
// a buil-in module
const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// uptime of system
// in seconds(how long computer has been running)
const uptime = os.uptime();
console.log(uptime);

// other methods
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
