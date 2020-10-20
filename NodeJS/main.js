var http = require("http");
var url = require("url");
var fs = require("fs");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var title = queryData.id;
  console.log(title);
  if (_url == "/") {
    title = "Welcome";
    // url = "/index.html";
  }
  if (_url == "/favicon.ico") {
    return response.writeHead(404);
  }
  response.writeHead(200);
  console.log(__dirname + _url);
  var template = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8" />
      <link rel="stylesheet" href="style.css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="colors.js"></script>
    </head>
  
    <body>
      <h1><a href="/">WEB</a></h1>
  
      <input type="button" value="Night" onclick="NightDayHandler(this);" />
  
      <div id="grid">
        <ol>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript" id="active">JavaScript</a></li>
        </ol>
  
        <div id="contents">
          <h2>
            <a href="https://namu.wiki/w/JavaScript" target="_blank">${title}</a
            >란 무엇인가?
          </h2>
  
          <p>
            프로토타입기반의 객체지향 프로그래밍 언어로, 스크립트 언어에 해당된다.
            특수한 목적이 아닌 이상 모든 웹 브라우저에 인터프리터가 내장되어 있다.
            오늘날 HTML, CSS와 함께 웹을 구성하는 요소 중 하나다. HTML이 웹
            페이지의 기본 구조를 담당하고, CSS가 디자인을 담당한다면 JavaScript는
            클라이언트 단에서 웹 페이지가 동작하는 것을 담당한다. 웹 페이지를
            자동차에 비유하자면, HTML은 자동차의 뼈대, CSS는 자동차의 외관,
            JavaScript는 자동차의 동력이라고 볼 수 있다. 썬 마이크로시스템즈(현재
            오라클)에서 개발한 Java와는 별 관계가 없는 언어이다. 이름이 비슷하다고
            같은 언어가 아니다. 사람들이 흔히 헷갈리는 부분 중 하나. 실질적인 구동
            방식도 JVM을 이용해서 돌리는 Java와, 브라우저 내에 스크립트
            엔진(인터프리터)이 존재하는 JavaScript는 완전히 다르다. 햄이랑
            햄스터가 다르고 파와 파슬리가 다르며, 인도가 인도네시아와 다르듯
            심지어는 웹 서버용 파생 규격도 다르다. JavaScript는 C에서 영향을 받은
            C-Family 언어로 기본적인 문법이 유사 중괄호로 구분하는 블럭,
            세미콜론으로 줄이 끝남을 알리는 것[2], 변수 쓰는 법, 연산자 사용법 등
            기초적인 문법이 C 문법과 크게 다르지 않다.
          </p>
        </div>
      </div>
    </body>
  </html>  
  `;
  response.end(template);
  //   response.end(fs.readFileSync(__dirname + _url));
});
app.listen(3000);
