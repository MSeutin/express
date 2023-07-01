// now we look at asynchronously writing/reading to files (non-blocking)
const { readFile, writeFile } = require("fs");

// for asynch we provide callbacks
// because the callbacks are asynchronous
// and are run when the code is finished

///// READING FROM FILES /////
readFile("./200_content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const first = result;
    readFile("./200_content/second.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = result;
        writeFile(
          "./200_content/result-async.txt",
          `Here is the result: ${first}, ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            } else {
              console.log(result);
            }
          }
        );
      }
    });
  }
});
