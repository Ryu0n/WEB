var http = require("http");
var url = require("url");
var fs = require("fs");
var qs = require("querystring");
var path = require('path');
var template = require('./lib/template')

var app = http.createServer(function (request, response) {

  var _url = request.url;
  var parsedData = url.parse(_url, true);
  var queryData = parsedData.query;
  var pathname = parsedData.pathname;
  var _title = queryData.id;
  var title = _title;
  if (_title != undefined) {
    title = path.parse(_title).base;
  }

  console.log(_title);

  if (pathname == "/") {
    fs.readdir("./data/", (err, files) => {
      var list = template.List(files);
      var description = "Hello, Node.js";
      var HTML = null;
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

      HTML = template.HTML(title, list, description, control);

      if (HTML != null) {
        response.writeHead(200); // Success
        response.end(HTML);
      }
    });
  } 
  
  else if (pathname == "/create") {
    fs.readdir("./data/", (err, files) => {
      title = "CREATE";
      var list = template.List(files);
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
      var HTML = template.HTML(title, list, form, "");

      if (HTML != null) {
        response.writeHead(200); // Success
        response.end(HTML);
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
  } 
  
  else if (pathname == "/update") {
    fs.readdir("./data/", (err, files) => {
      var list = template.List(files);
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
      var HTML = template.HTML(title, list, form, control);

      response.writeHead(200); // Success
      response.end(HTML);
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
  } 
  
  else if (pathname == "/delete_process") {
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
  } 
  
  else {
    response.writeHead(404); // Not found
    response.end("Not found");
  }
});
app.listen(3000);
