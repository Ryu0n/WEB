/*
function a(){
    console.log('A');
}
*/

var a = function () {
  console.log("A");
};

a();

var b = () => {
  console.log("B");
};

b();

function slowfunc(callback) {
  callback();
}

slowfunc(a);
