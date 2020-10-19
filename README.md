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
- li : list의 약자. 리스트의 각 항목을 의미한다. 고로, <ol>, <ul> 태그안에 자식 태그로써 삽입되어야 한다.
- p : paragraph의 약자. 문단을 의미한다.
- input : type을 통해 값을 넣고자 하는 형태를 정할 수 있고, value, onclick등 다양한 속성들이 존재한다.
- br : 개행 태그.

이 밖에도 많은 태그들이 있으니 검색해보길..

### Attributes

- id  
  id는 고유하다는 특징이 있다.  
  css에서 참조하는 방법 :  
  #grid {  
  display: grid;  
  grid-template-columns: 150px 1fr;  
  }
- class  
   class 속성에 띄어쓰기를 쓸때마다 자식으로 구분한다.  
   saw active 는 saw의 자식은 active를 의미..  
  css에서 참조하는 방법 :  
  .saw {  
  color: gray;  
  }
  .active {  
  color: red;  
  }

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
 #grid {  
border: 3px solid pink;  
display: grid;  
grid-template-columns: 1fr 1fr; /_ 가로로 1:1 비율 유지 _/  
}

### MediaQuery

웹 페이지를 출력하는 화면의 크기에 따라 웹 페이지 자체의 사이즈도 동적으로 반응해야할 경우가 생긴다. (반응형 웹 디자인) 이를 위해 사용하는 기술이다.  
아래의 코드는 최대 너비가 800일때까지는 표시하지 말라는 의미이다.  
작동하려면 @media 키워드를 사용하고 괄호 안에는 조건을 달아주어야 한다.  
/_ media query : 반응형 웹 디자인 _/  
@media (max-width: 800px) {  
div {  
display: none;  
}  
}

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
