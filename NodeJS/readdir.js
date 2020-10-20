const fs = require("fs");

fs.readdir("./data/", (err, files) => {
  console.log(files);
  files.forEach((value, index, array) => {
    console.log(array[index]);
    console.log(value);
  });
});
