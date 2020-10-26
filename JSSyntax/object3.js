// this 키워드를 사용하면 자기 자신의 객체를 가르키기 때문에
// 객체의 이름에 구애받지 않고 참조할 수 있다.
var o = {
  v1: "v1",
  v2: "v2",
  f1: function () {
    console.log(this.v1);
  },
  f2: function () {
    console.log(this.v2);
  },
};

o.f1();
o.f2();
