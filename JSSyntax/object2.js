// 함수는 변수의 값으로써 대입이 가능하다.
var f1 = function () {
  console.log("funciton1 can be value.");
};

var f2 = function () {
  console.log("funciton2 can be value.");
};

f1();

// 함수는 배열의 원소로써도 대입이 가능하다.
var functionList = [f1, f2];
functionList[1]();

// 함수는 객체의 프로퍼티로써도 대입이 가능하다.
var o = {
  func1: f1,
  func2: f2,
};
o.func2();
