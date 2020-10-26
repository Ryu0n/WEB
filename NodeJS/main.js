var http = require("http");
var url = require("url");
var fs = require("fs");
var qs = require("querystring");

function templateHTML(title, list, description, control) {
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
        ${control}
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
      var control = null;

      if (title == undefined) {
        title = "Welcome";
        control = "";
      } else {
        description = fs.readFileSync(`data/${title}`, "utf8");
        control = `
        <a href="/create">CREATE</a> 
        <a href="/update?id=${title}">UPDATE</a> 
        <form action="delete_process" method="post">
          <input type="hidden" name="id" value="${title}">
          <input type="submit" value="delete">
        </form>`;
      }

      template = templateHTML(title, list, description, control);

      if (template != null) {
        response.writeHead(200); // Success
        response.end(template);
      }
    });
  } else if (pathname == "/create") {
    fs.readdir("./data/", (err, files) => {
      title = "CREATE";
      var list = getFileList(files);
      var form = `
      <form action="http://localhost:3000/create_process" method="POST" placeholder="title">
      <p><input type="text" name="title" /></p>
      <p>
        <textarea name="description" placeholder="description"></textarea>
      </p>
      <p>
        <input type="submit" value="CREATE"/>
      </p>
    </form>
      `;
      var template = templateHTML(title, list, form, "");

      if (template != null) {
        response.writeHead(200); // Success
        response.end(template);
      }
    });
  } else if (pathname == "/create_process") {
    var body = "";

    request.on("data", function (data) {
      body = body + data;

      if (body.length > 1e6) {
        request.connection.destroy();
      }
    });

    request.on("end", function () {
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;

      fs.writeFile(`data/${title}`, description, "utf8", function (err) {
        response.writeHead(302, { Location: `/?id=${title}` }); // 302 : redirection
        response.end();
      });
    });
  } else if (pathname == "/update") {
    fs.readdir("./data/", (err, files) => {
      var list = getFileList(files);
      var description = fs.readFileSync(`data/${title}`, "utf8");
      var control = `<a href="/create">CREATE</a>`;
      var form = `
      <form action="http://localhost:3000/update_process" method="POST" placeholder="title">
      <input type="hidden" name="id" value="${title}">
      <p><input type="text" name="title" value="${title}"/></p>
      <p>
        <textarea name="description" placeholder="description">
        ${description}</textarea>
      </p>
      <p>
        <input type="submit" value="UPDATE"/>
      </p>
    </form>
      `;
      var template = templateHTML(title, list, form, control);

      response.writeHead(200); // Success
      response.end(template);
    });
  } else if (pathname == "/update_process") {
    var body = "";

    request.on("data", function (data) {
      body = body + data;

      if (body.length > 1e6) {
        request.connection.destroy();
      }
    });

    request.on("end", function () {
      var post = qs.parse(body);
      var id = post.id;
      var title = post.title;
      var description = post.description;

      fs.rename(`data/${id}`, `data/${title}`, function (error) {
        fs.writeFile(`data/${title}`, description, "utf8", function (err) {
          response.writeHead(302, { Location: `/?id=${title}` }); // 302 : redirection
          response.end();
        });
      });
    });
  } else if (pathname == "/delete_process") {
    var body = "";

    request.on("data", function (data) {
      body = body + data;

      if (body.length > 1e6) {
        request.connection.destroy();
      }
    });

    request.on("end", function () {
      var post = qs.parse(body);
      var id = post.id;

      fs.unlink(`data/${id}`, function (error) {
        response.writeHead(302, { Location: `/` }); // 302 : redirection
        response.end();
      });
    });
  } else {
    response.writeHead(404); // Not found
    response.end("Not found");
  }
});
app.listen(3000);
