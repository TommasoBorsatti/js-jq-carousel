


var nextButton = $(".next");
var prevButton = $(".prev");


nextButton.click(
  function() {
    var selected = $(".images img.active");
    selected.removeClass("active");

    if (selected.hasClass("last")) {
      $(".images img.first").addClass("active");
    } else {
      selected.next().addClass("active");
    }
  }
);

prevButton.click(
  function() {
    var selected = $(".images img.active");
    selected.removeClass("active");

    if (selected.hasClass("first")) {
      $(".images img.last").addClass("active");
    }
    selected.prev().addClass("active");
  }
);
