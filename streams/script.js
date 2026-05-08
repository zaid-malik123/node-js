// const fs = require("fs");

// console.log("Starting without stream...");

// const data = fs.readFileSync("test.txt");

// console.log("File loaded");

// setInterval(() => {

//   const memory = process.memoryUsage();

//   console.log(
//     "RAM Used:",
//     (memory.heapUsed / 1024 / 1024).toFixed(2),
//     "MB"
//   );

// }, 1000);

// // const fs = require("fs");

// // console.log("Starting stream...");

// // const readStream = fs.createReadStream("test.txt");

// // readStream.on("data", (chunk) => {
// //   console.log("Chunk:", chunk.length);
// // });

// // readStream.on("end", () => {
// //   console.log("Reading completed");
// // });

// // setInterval(() => {

// //   const memory = process.memoryUsage();

// //   console.log(
// //     "RAM Used:",
// //     (memory.heapUsed / 1024 / 1024).toFixed(2),
// //     "MB"
// //   );

// // }, 1000);