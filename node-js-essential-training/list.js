const fs = require("fs");

fs.readFile("./globalProcess.js", "UTF-8", (err, text) => {
    console.log(text);
});

console.log("START")