var Body = {
  setBackgroundColor: function (color) {
    $("body").css("backgroundColor", color);
  },
  setFontColor: function (color) {
    $("body").css("color", color);
  },
  //   setBackgroundColor: function (target, color) {
  //     target.style.backgroundColor = color;
  //   },
  //   setFontColor: function (target, color) {
  //     target.style.color = color;
  //   },
};

var Links = {
  setLinksColor: function (color) {
    // jQuery의 $함수 : 해당 모든 태그를 제어하겠다는 의미.
    $("a").css("color", color);

    // var links = document.querySelectorAll("a");
    // var i = 0;
    // while (i < links.length) {
    //   links[i].style.color = color;
    //   i += 1;
    // }
  },
};

function NightDayHandler(self) {
  //   var target = document.querySelector("body");

  if (self.value == "Night") {
    Body.setBackgroundColor("black");
    Body.setFontColor("white");
    // Body.setBackgroundColor(target, "black");
    // Body.setFontColor(target, "white");

    self.value = "Daylight";

    Links.setLinksColor("powderblue");
  } else {
    Body.setBackgroundColor("white");
    Body.setFontColor("black");
    // Body.setBackgroundColor(target, "white");
    // Body.setFontColor(target, "black");

    self.value = "Night";

    Links.setLinksColor("blue");
  }
}
