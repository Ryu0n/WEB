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
      <!-- <link rel="stylesheet" href="../HTML&CSS&JS/style.css" /> -->
      <!-- <script src="../HTML&CSS&JS/colors.js"></script> -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
  
    <body>
      <h1><a href="/">WEB</a></h1>
  
      <input type="button" value="Night" onclick="NightDayHandler(this);" />
  
      <div id="grid">
        ${list}
        <a href="/create">create</a>
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

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var parsedData = url.parse(_url, true);
  var queryData = parsedData.query;
  var pathname = parsedData.pathname;
  var title = queryData.id;

  if (pathname == "/") {
    fs.readdir("./data/", (err, files) => {
      var list = getFileList(files);
      var description = "Hello, Node.js";
      var template = null;

      if (title == undefined) {
        title = "Welcome";
        template = templateHTML(title, list, description);
      } else {
        description = fs.readFileSync(`data/${title}`, "utf8");
        template = templateHTML(title, list, description);
      }

      if (template != null) {
        response.writeHead(200); // Success
        response.end(template);
      }
    });
  } else if (pathname == "/create") {
    fs.readdir("./data/", (err, files) => {
      var list = getFileList(files);
      var description = `
      <form action="http://localhost:3000/process_create" method="POST" placeholder="title">
      <p><input type="text" name="title" /></p>
      <p>
        <textarea name="description" placeholder="description"></textarea>
      </p>
      <p>
        <input type="submit" />
      </p>
    </form>
      `;
      var template = null;

      if (title == undefined) {
        title = "CREATE";
        template = templateHTML(title, list, description);
      }

      if (template != null) {
        response.writeHead(200); // Success
        response.end(template);
      }
    });
  } else {
    response.writeHead(404); // Not found
    response.end("Not found");
  }
});
app.listen(3000);
