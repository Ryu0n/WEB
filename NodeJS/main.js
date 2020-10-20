var http = require("http");
var url = require("url");
var fs = require("fs");

function templateHTML(title, list, description) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>WEBn - ${title}</title>
      <meta charset="utf-8" />
      <link rel="stylesheet" href="style.css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="../HTML&CSS&JS/colors.js"></script>
    </head>
  
    <body>
      <h1><a href="/">WEB</a></h1>
  
      <input type="button" value="Night" onclick="NightDayHandler(this);" />
  
      <div id="grid">
        ${list}
        <div id="contents">
          <h2>
            <a href="https://namu.wiki/w/${title}" target="_blank">${title}</a
            >
          </h2>
          <p>
            ${description}
          </p>
        </div>
      </div>
    </body>
  </html>  
  `;
}

function getFileList(files) {
  var list = "<ul>";
  files.forEach((value, index, array) => {
    list += `<li><a href="/?id=${value}">${value}</a></li>`;
  });
  list += "</ul>";

  return list;
}

function setDefault(title, description) {
  var info = {};

  info.title = title;
  info.description = description;

  if (title == undefined) {
    info.title = "Welcome";
    info.description = "Hello, Node.js";
  }

  return info;
}

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var parsedData = url.parse(_url, true);
  var queryData = parsedData.query;
  var pathname = parsedData.pathname;
  var title = queryData.id;

  if (pathname == "/") {
    fs.readdir("./data/", (err, files) => {
      var list = getFileList(files);

      fs.readFile(`data/${title}`, "utf8", (err, description) => {
        var info = setDefault(title, description);
        var template = templateHTML(info.title, list, info.description);

        response.writeHead(200); // Success
        response.end(template);
      });
    });
  } else {
    response.writeHead(404); // Not found
    response.end("Not found");
  }
});
app.listen(3000);
