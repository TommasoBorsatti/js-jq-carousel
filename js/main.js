


var nextButton = $(".next");
var prevButton = $(".prev");


nextButton.click(
  function() {
    var selected = $(".images img.active");
    selected.removeClass("active");
    selected.next().addClass("active");
  }
);

prevButton.click(
  function() {
    var selected = $(".images img.active");
    selected.removeClass("active");
    selected.prev().addClass("active");
  }
);
