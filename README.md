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

- CRUD (Create, Read, Update, Delete)
