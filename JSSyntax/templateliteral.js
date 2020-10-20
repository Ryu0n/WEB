var name = "ryuon";

var letter = "abcdefgh\nijklmnop";

// `는 템플릿 리터럴. 템플릿 리터럴 안에서는 변수를 ${}로 대체 가능하고 개행문자같은 특수기호를 따로 넣을 필요가 없다.
var newLetter = `Dear ${name}

hello ${name}. I miss you.`;

console.log(letter);
console.log(newLetter);
