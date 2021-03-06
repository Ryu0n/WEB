# WEB

## WEB - HTML, CSS

- HTML : 웹 페이지의 _구조_(틀)을 정의할 수 있다.
- CSS : 웹 페이지의 *디자인*을 정의할 수 있다.

### Tags

- html : 해당 문서가 html 문서임을 의미.
- title : 문서의 제목을 정의.
- div : division의 약자. 특별한 기능은 없지만 영역을 나누기 위해 사용되는 태그.
- h1 ~ h6 : header의 약자. 숫자가 커질수록 글자 크기가 작아지는 특징이 있다.
- ol : ordered list의 약자. 내용 앞에 자동으로 넘버링이 되는 특징이 있다.
- ul : unordered list의 약자. 넘버링이 되지 않는다.
- li : list의 약자. 리스트의 각 항목을 의미한다. 고로, ol, ul 태그안에 자식 태그로써 삽입되어야 한다.
- p : paragraph의 약자. 문단을 의미한다.
- input : type을 통해 값을 넣고자 하는 형태를 정할 수 있고, value, onclick등 다양한 속성들이 존재한다.
- br : 개행 태그.

이 밖에도 많은 태그들이 있으니 검색해보길..

### Attributes

- id  
  id는 고유하다는 특징이 있다.  
  css에서 참조하는 방법 :

  ```
  #grid {
    display: grid;
    grid-template-columns: 150px 1fr;
  }
  ```

- class  
   class 속성에 띄어쓰기를 쓸때마다 자식으로 구분한다.  
   saw active 는 saw의 자식은 active를 의미..  
   css에서 참조하는 방법 :

  ```
  .saw {
      color: gray;
  }

  .active {
      color: red;
  }
  ```

### Inline & Block

각 태그들은 영역을 차지하는 방법이 크게 두 가지가 있다.

- Inline 방식 : 자기 자신의 콘텐츠 크기만큼의 크기만 할당한다.
- Block 방식 : 특정 영역의 크기의 전체를 할당한다.

### span & div

두 태그 모두 특정 영역을 나누기 위한 태그이다.  
그러나.. 둘의 차이점은 span 태그는 inline, div 태그는 block 방식이라는 점이다.

### Grid

Grid 기술은 레이아웃을 편리하게 디자인하기 위한 기술이다.  
Grid 기술을 사용하면 페이지 영역 분할이 용이해진다. 가령 3x3이라던가..  
Grid 기술을 사용하기 위해서는 배치할 요소들의 부모 태그가 필요하다.

```
 #grid {
    border: 3px solid pink;
    display: grid;
    grid-template-columns: 1fr 1fr; /_ 가로로 1:1 비율 유지 _/
 }
```

### MediaQuery

웹 페이지를 출력하는 화면의 크기에 따라 웹 페이지 자체의 사이즈도 동적으로 반응해야할 경우가 생긴다. (반응형 웹 디자인) 이를 위해 사용하는 기술이다.  
아래의 코드는 최대 너비가 800일때까지는 표시하지 말라는 의미이다.  
작동하려면 @media 키워드를 사용하고 괄호 안에는 조건을 달아주어야 한다.

```
 /_ media query : 반응형 웹 디자인 _/
 @media (max-width: 800px) {
    div {
        display: none;
    }
 }
```

## WEB - JavaScript

### 2020-10-19

- 메소드, 객체, 파일  
  메소드가 많아지면 객체로 그루핑  
  객체가 많아지면 파일로 쪼개서 관리 (.js 파일)

- Library & Framework  
  JavaScript의 유명한 라이브러리로 jQuery가 있다.  
  물론, jQuery를 다운로드 받아서 쓰는 방법도 있지만 CDN을 통해서 <script scr="xxx"> 키워드를 사용하여 스크립트를 import하는 방법도 있다..  
  CDN : Content Delivery Network 의 약자. (https://jquery.com/download/)

- jQuery  
  \$('xx:) : 해당 모든 태그를 제어하겠다는 의미
  .css() : 스타일을 위한 메소드

## WEB - Node.js

### 2020-10-19

Nodejs를 통해 웹 애플리케이션을 만들어보자.  
웹 애플리케이션은 HTML같은 문서들을 자동으로 만들 수 있다. 직접 작성하지 않고도..

극단적으로 생각해보자. 만약 1억개의 웹 페이지에 있는 ol 태그들을 ul 태그들로 바꿔야 한다면 수작업을 하면 매우 힘들지 않을까? 이를 해결할 수 있는 도구가 Node.js이다.

웹은 클라이언트와 서버 사이에 request, response관계에 있다.  
Node.js는 웹 서버로써의 기능을 수행할 것이다.

### 2020-10-20

- 템플릿 리터럴 (JavaScript)  
  템플릿 리터럴은 `기호를 사용하면 된다. 템플릿 리터럴을 사용하면 변수를 \${}로 대체할 수 있으며 개행문자와 같은 특수기호를 따로 사용하지 않아도 된다.

- URL  
  URL의 형식에 대해 알아보자.  
   'http://opentutorials.org:3000/main?id=HTML&page=12'  
  **http** : hyper text transfer protocol, 사용자가 서버에 접속할 때의 방식. 웹 브라우저와 웹 서버가 데이터를 주고 받기 위한 프로토콜  
  **opentutorials.org** : host(domain)  
  **3000** : 3000번 포트와 연결되어 있는 서버와 통신. 3000번 포트에 nodejs 서버를 실행시킨 것. 단, 80번 포트를 통해서 실행시킨 경우 접속할 때에는 80번이 생략 가능하다. 전세계적으로 80번을 쓰기 때문.  
  **main** : path  
  **?id=HTML&page=12** : _query string_, 요청할 때 전달할 정보. ?로 시작하는 것으로 약속되어 있다.

- Query String  
  Query String을 통해 동적인 웹 페이지를 제공할 수 있다. (틀이 같다는 전재에서) 똑같은 템플릿에 데이터만 다른 경우 어떡해야 하는가? 에 대한 문제를 해결할 수 있는 것이다.

  ```
      var queryData = url.parse(\_url, true).query;
      var title = queryData.id;
  ```

  queryData에는 특정 객체가 생성된다. 이 객체는 URL의 /? 뒤에 오는 정보들을 담고 있다. 그래서, id에 대한 정보를 담고 있다면 위의 title 변수처럼 객체안의 정보를 참조하여 템플릿 리터럴을 사용해 동적인 웹 페이지를 제공할 수 있게 된다.

- fs (File System)  
  fs.fileRead(path, options, callback) 메소드를 통해 주어진 Query String에 따라 알맞는 파일(웹 페이지)을 로드할 수 있다. 물론 서버단의 스크립트가 수정되면 nodejs를 재구동해야 하지만, 각 웹 페이지의 수정사항을 반영할 때에는 파일을 읽어들이는 구조이기 때문에 nodejs를 재구동할 필요가 없다.

  fs.readdir(path, callback) 메소드를 통해 해당 디렉터리의 파일목록들을 읽어들일 수 있다.

- Synchronous & Asynchronous  
  Synchronous는 동기, Asynchronous는 비동기라는 의미이다. 동기는 하나의 작업이 끝날 때까지 다음 작업을 실행하지 않는다. 반대로 비동기는 하나의 작업이 끝나지 않더라도 다른 작업을 수행함을 의미한다. (병렬적)  
  Node.js는 **비동기**를 위한 기능들이 포함되어 있다.  
  예를 들어보자..

  ```
  fs.readFile(path[, options], callback)
  fs.readFileSync(path[, options])
  ```

- Callback  
  함수를 인자로써 넘길 수 있다. 그리고 특정작업이 끝나면 인자로 넘겨준 콜백메소드를 호출하여 해당 작업을 수행하는 것을 의미한다.

  ```
  var a = function () {
  console.log("A");
  };

  function slowfunc(callback) {
  callback();
  }

  slowfunc(a);
  ```

- NPM (Node Package Manager)
  Nodsjs에서 NPM을 통해 패키지(일종의 모듈)을 설치 및 관리할 수 있다.  
  pm2를 통해 우리가 Nodejs를 통해 만든 프로그램을 패키지화 시켜 관리할 수 있다.

  ```
  // pm2 패키지 설치
  npm install pm2 -g

  // pm2 패키지를 통해 우리가 만든 프로그램을 실행
  pm2 start main.js

  // pm2 패키지를 통해 실행되고 있는 프로그램을 모니터링
  pm2 monit

  // pm2 패키지를 통해 실행되고 있는 프로그램 리스트 출력
  pm2 list

  // pm2 패키지를 통해 실행되고 있는 프로그램을 stop
  pm2 stop main.js

  // --watch 옵션을 붙이게 되면 변경사항이 생기더라도 재구동을 할 필요가 없음.
  pm2 start main.js --watch

  // 문제점이 발생하면 로그를 출력하여 오류를 발견 가능.
  pm2 log
  ```

- HTML Form  
   사용자가 서버쪽으로 데이터를 전송하기 위한 방식.  
   HTML 문서에서 form 태그를 사용하면 된다. form 태그의 속성으로 action이 사용되는데 이는 어디로 입력받은 데이터를 전송할 것인지를 의미한다. 그리고 어떤 데이터를 전송할 것인지를 알아야 하므로 name속성을 사용해야 한다.

  ```
  <form action="http://localhost:3000/process_create">
    <p><input type="text" name="title" /></p>
    <p>
        <textarea name="description"></textarea>
    </p>
    <p>
        <input type="submit" />
    </p>
  </form>
  ```

  http://localhost:3000/process_create?title=111&description=222  
  title과 description에 입력한 값으로 쿼리스트링이 만들어지는 것을 확인할 수 있다.

  그러나 이 방법은 좋은 방법이 아니다. URL에 데이터가 포함되어 있기 때문에 누군가가 이를 악용할 수 있기 때문이다. (GET 방식)

  ```
  <form action="http://localhost:3000/process_create" method="POST">
  <p><input type="text" name="title" /></p>
  <p>
      <textarea name="description"></textarea>
  </p>
  <p>
      <input type="submit" />
  </p>
  </form>
  ```

  허나, 위와 같이 method속성에 POST값을 주게 되면 쿼리 스트링의 데이터를 URL에 노출시키지 않고 요청할 수 있게 된다.

- GET 방식 & POST 방식  
  출처 : https://hongsii.github.io/2017/08/02/what-is-the-difference-get-and-post/  
   *GET 방식*은 **서버로부터 정보를 조회**하기 위해 설계된 메소드입니다. GET은 요청을 전송할 때 필요한 데이터를 Body에 담지 않고, **쿼리스트링**을 통해 전송합니다. 쿼리스트링을 사용하게 되면 URL에 **조회 조건**을 표시하기 때문에 특정 페이지를 **링크하거나 북마크**할 수 있습니다.

  쿼리스트링을 포함한 URL의 샘플은 아래와 같습니다. 여기서 요청 파라미터명은 name1, name2이고, 각각의 파라미터는 value1, value2라는 값으로 서버에 요청을 보내게 됩니다.

  www.example-url.com/resources?name1=value1&name2=value2

  그리고 GET은 불필요한 요청을 제한하기 위해 요청이 캐시될 수 있습니다. js, css, 이미지 같은 정적 컨텐츠는 데이터양이 크고, 변경될 일이 적어서 반복해서 동일한 요청을 보낼 필요가 없습니다. **정적 컨텐츠를 요청**하고 나면 브라우저에서는 **요청을 캐시**해두고, 동일한 요청이 발생할 때 서버로 요청을 보내지 않고 캐시된 데이터를 사용합니다. 그래서 프론트엔드 개발을 하다보면 **정적 컨텐츠가 캐시돼 컨텐츠를 변경해도 내용이 바뀌지 않는 경우**가 종종 발생합니다. 이 때는 브라우저의 캐시를 지워주면 다시 컨텐츠를 조회하기 위해 서버로 요청을 보내게 됩니다.

  *POST 방식*은 **리소스를 생성/변경/삭제**하기 위해 설계되었기 때문에 GET과 달리 전송해야될 데이터를 **HTTP 메세지의 Body에 담아서** 전송합니다. HTTP 메세지의 Body는 **길이의 제한없이** 데이터를 전송할 수 있습니다. 그래서 POST 요청은 GET과 달리 **대용량 데이터**를 전송할 수 있습니다. 이처럼 POST는 데이터가 Body로 전송되고 내용이 눈에 보이지 않아 GET보다 보안적인 면에서 안전하다고 생각할 수 있지만, POST 요청도 크롬 개발자 도구, Fiddler와 같은 툴로 요청 내용을 확인할 수 있기 때문에 민감한 데이터의 경우에는 반드시 **암호화**해 전송해야 합니다. (크롬 브라우저 - 개발자 도구 - Network - Form Data에서 확인이 가능)

  그리고 POST로 요청을 보낼 때는 요청 **헤더의 Content-Type에 요청 데이터의 타입을 표시**해야 합니다. 데이터 타입을 표시하지 않으면 서버는 내용이나 URL에 포함된 리소스의 확장자명 등으로 데이터 타입을 유추합니다. 만약, 알 수 없는 경우에는 application/octet-stream로 요청을 처리합니다.

### 2020-10-26

**CRUD (Create, Read, Update, Delete)**

- READ 기능 구현하기

```
if (pathname == "/create_process") {
    var body = "";

    /* data 이벤트 */
    // web 브라우저가 post방식으로 데이터를 전송할 때 데이터가 많으면 무리가 갈 수 있다.
    // node.js에서는 post 방식으로 전송된 데이터가 많을 때를 대비해서..
    request.on("data", function (data) {
      // 데이터를 조각내서 수신할 때마다 추가
      body = body + data;

      // 한번에 너무 많은 양이 들어오면 접속을 끊는다.
      if (body.length > 1e6) {
        request.connection.destroy();
      }
    });

    /* end 이벤트 */
    // 정보 수신이 끝난 시점.
    request.on("end", function () {
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;
    });

    response.writeHead(200);
    response.end("success");
  }
```

- CREATE 기능 구현하기

```
    /* end 이벤트 */
    // 정보 수신이 끝난 시점.
    request.on("end", function () {
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;

      // 아래의 콜백함수는 에러를 처리하는 부분을 위해 제공됨.
      // 콜백함수가 호출되는 시점 : 파일의 저장이 끝날을 때
      fs.writeFile(`data/${title}`, description, "utf8", function (err) {
        response.writeHead(200);
        response.end("success");
      });
    }
```

그러나.. 생성된 파일을 볼 수 있는 *뷰 페이지*가 필요하다!

**리다이렉션**이 필요하다.  
리다이렉션 : 사용자를 다른 페이지로 보내는 것.

```
    /* end 이벤트 */
    // 정보 수신이 끝난 시점.
    request.on("end", function () {
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;

      // 아래의 콜백함수는 에러를 처리하는 부분을 위해 제공됨.
      // 콜백함수가 호출되는 시점 : 파일의 저장이 끝날을 때
      fs.writeFile(`data/${title}`, description, "utf8", function (err) {
        response.writeHead(302, { Location: `/?id=${title}` }); // 302 : redirection
        response.end();
      });
    }
```

우리는 여태까지 CREATE 연산을 구현한 것이다. 앞으로 UPDATE도 구현할 것이다..

- UPDATE 기능 구현하기

필요한 것

1. Form
2. Read 기능 - form의 수정할 데이터를 읽기 위한..

```
if (pathname == "/update") {
    fs.readdir("./data/", (err, files) => {
      var list = getFileList(files);
      var description = fs.readFileSync(`data/${title}`, "utf8");
      var control = `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`;
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
  }
```

input hidden 타입은 특정 파일을 수정할 때, 이름을 수정한 경우 수정된 이름의 파일을 찾을 수 없을 것이다. 그래서 기존의 파일명을 유지하기 위해 존재한다.

```
if (pathname == "/update_process") {
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

      // 파일의 이름 변경
      fs.rename(`data/${id}`, `data/${title}`, function (error) {
        // 파일의 내용 변경
        fs.writeFile(`data/${title}`, description, "utf8", function (err) {
          response.writeHead(302, { Location: `/?id=${title}` });
          response.end();
        });
      });
    });
  }
```

- DELETE 기능 구현하기  
  DELETE 버튼을 눌렀을 때는 특정 페이지로 이동하게끔 링크를 걸어두면 위험하다. 그 이유는 해당 링크를 접근하면 (특히 GET 방식은 요청 URL에 쿼리 스트링이 들어가 있으므로 정보 노출이 더 심하다.) 누구나 데이터를 삭제할 수 있기 때문이다. 그래서 삭제기능은 **form**으로 구현하는게 맞다.

```
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
  }
```

```
if (pathname == "/delete_process") {
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
```

파일을 삭제할 때는 fs객체의 unlink() 메소드를 사용하면 된다. 그리고 삭제한 이후에는 최초의 경로로 리다이렉트를 해줄 필요가 있다.

### 2020-11-10

- Module  
  객체(프로퍼티와 메소드의 집합)들을 **라이브러리**화 시키는 단위이다.  
  라이브러리화를 위해서는 module.exports 키워드를 사용해야 한다.  
  라이브러리화된 모듈은 require() 메소드를 통해 불러올 수 있다.

  ```
  // mo.js

  M = {
    fields:'value',
    func:function(){
      console.log(this.fields);
      }
    }

  module.exports = M;
  ```

  ```
  // mouse.js

  var M = require('./mo.js')
  ```

- Security (오염된 정보가 **입력**된 사례)
  현재 상태에서는 보안 문제가 있다. 무슨 문제냐? 만약 요청 url에 http://localhost:3000/?id=../password.js라고 입력했다고 가정하자. 쿼리스트링의 id에 ../ 부분을 보면 상위디렉터리에 접근이 가능하다는 점이다. 이는 계속 상위디렉터를 타고가면 우리의 하드 디스크에도 접근이 가능하다는 중대한 문제가 존재한다.

  path 모듈의 parse() 메소드를 사용하면 경로를 파싱한 정보를 담고있는 객체를 얻을 수 있다.

  ```
  // lib/pathparse.js

  var path = require('path');

  parsing = path.parse('../password.js');

  console.log(parsing);
  console.log(parsing.base);
  ```

  ```
  // 실행결과

  {
    root: '',
    dir: '..',
    base: 'password.js',
    ext: '.js',
    name: 'password'
  }
  password.js
  ```

  이를 사용하여 base 부분만 뽑아내면 입력정보에 대한 보안을 만족시킬 수 있다.

  ```
  // 기존의 title 변수명을 title_로 바꾸었다.
  var _title = queryData.id;
  var title = _title;
  if (_title != undefined) {
    title = path.parse(_title).base;
  }
  ```

  http://localhost:3000/?id=../password.js 를 url로 입력하고 \_title 변수를 출력해보았다.

  ```
  // pm2 log 결과
  0|main   | ../password.js
  ```

  그러나 오류가 발생했다.

  ```
  0|main   | Error: ENOENT: no such file or directory, open 'data/password.js'
  0|main   |     at Object.openSync (fs.js:462:3)
  0|main   |     at Object.readFileSync (fs.js:364:35)
  0|main   |     at D:\02. Development\WEB\NodeJS\main.js:33:26
  0|main   |     at FSReqCallback.oncomplete (fs.js:156:23) {
  0|main   |   errno: -4058,
  0|main   |   syscall: 'open',
  0|main   |   code: 'ENOENT',
  0|main   |   path: 'data/password.js'
  0|main   | }
  ```

  ../password.js 부분의 base부분(password.js)만 필터링하여 나머지 경로는 제거한 상태로 요청 url을 쏘기 때문에 data/password.js 요청이 찍히는 것이다. (data/../password.js로 찍히지 않고..)

### 2020-11-16

- Security (오염된 정보가 **출력**된 사례)

사용자는 데이터만을 서버에게 요청하여 출력물을 봐야한다. 그러나.. script태그를 사용하면 해당 데이터는 더 이상 데이터가 아닌 하나의 스크립트로 간주하여 실제로 실행된다.

![2020111603](https://user-images.githubusercontent.com/32003817/99250731-81320b00-284f-11eb-97d9-a1a19276cfc8.PNG)

위의 결과는 www.naver.com으로 튕겨버리는 현상이 발생한다.. 이후 XSS 라는 게시글을 클릭만 해도 네이버로 튕겨버린다.

즉, 공격자가 자바스크립트를 심어두면 다른 사용자들도 그 영향을 받게된다. 이것은 매우 심각한 현상이다.

이러한 현상을 방지하기 위해 script 태그 부분의 꺽쇠 부분을 HTML Character Entities들로 대체하는 알고리즘이 필요하다. 가령, <는 "& lt;"로, >는 "& gt;"말이다..

```
&lt;script&gt;
location.href='https://www.naver.com/'
&lt;/script&gt;
```

위 코드처럼 꺽쇠를 고쳤을 경우..

![2020111604](https://user-images.githubusercontent.com/32003817/99251596-f225f280-2850-11eb-9239-15dc84ff1fe4.PNG)

다음 결과처럼 스크립트가 실행되는 것이 아닌 문자로써 스크립트의 내용을 그대로 출력하게 된다.
이런 오염된 정보를 **소독**(Sanitize)해주는 모듈이 있다. npm을 통하여 sanitize-html을 다운로드하면 된다. 우선 현재 진행중인 애플리케이션 혹은 프로젝트를 npm으로 통해 관리하겠다는 명령어를 써야한다. 이것은 npm init이다. 패키지명은 현재 디렉터리를 기준으로 정해진다.

![2020111605](https://user-images.githubusercontent.com/32003817/99252969-3619f700-2853-11eb-9e10-62b7921ba475.PNG)

다음으로 npm install -S sanitize-html 을 입력하여 해당 모듈을 설치한다. 여기서 -S 옵션은 -g(글로벌 모드)가 아닌 현재 패키지에만 해당 모듈을 설치하겠다는 의미이다. 설치하고나면 node_modules 폴더가 생기는데 이 중 sanitize-html 폴더가 우리가 설치한 모듈이다. 나머지 폴더들은 sanitize-html이 의존하고 있는 모듈 및 소프트웨어들이다. (이러한 의존성 관리는 npm이 해주는 것!)

![2020111606](https://user-images.githubusercontent.com/32003817/99253298-dc65fc80-2853-11eb-8faa-f58843d4d644.PNG)

![2020111607](https://user-images.githubusercontent.com/32003817/99253425-159e6c80-2854-11eb-80eb-0f99e7e9121e.PNG)

그리고 package.json 파일을 확인해보면 dependencies 키를 확인할 수 있는데, 이는 현재 작업중인 프로젝트 및 **애플리케이션이 해당 모듈에 의존**하고 있다는 의미이다. (의존성)

![2020111608](https://user-images.githubusercontent.com/32003817/99254592-eee13580-2855-11eb-9a09-69d14ecff0b6.PNG)

sanitize-html 참고 링크 : https://www.npmjs.com/package/sanitize-html

다음은 sanitizeHtml 객체를 통해 CREATE 영역에서 태그들을 소독한 결과이다.

오염된 HTML 입력을 했지만..  
![2020111609](https://user-images.githubusercontent.com/32003817/99255017-9eb6a300-2856-11eb-958a-41c351eeb7c8.PNG)

HTML 태그들은 깨-끗하게 소독이 된 상태이다. (브라우저 상에도 출력되지 않음.)  
![2020111611](https://user-images.githubusercontent.com/32003817/99255145-d32a5f00-2856-11eb-97df-2dd86ddc627b.PNG)

기본적으로 h1과 같은 예민하지 않은 태그들은 내용은 살려준다. 그리고, allowedTag를 통해 허용태그를 설정할 수 도 있다. (위의 참고 링크에서 검색해보자.)
