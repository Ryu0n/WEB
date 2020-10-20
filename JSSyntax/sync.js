var fs = require("fs");

// readFileSync - A This is sample text. B
console.log("A");
var result = fs.readFileSync("./sample.txt", "utf8");
console.log(result);
console.log("B");

// readFile - AB This is sample text.
// 이유 : readFile은 A를 출력하고 동작하지만 아직 완료가 되지 않았기 때문에
// B가 출력되고 나서 완료되는 시점에서 출력하게 된다.
console.log("A");
fs.readFile("./sample.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(result);
});
console.log("B");
