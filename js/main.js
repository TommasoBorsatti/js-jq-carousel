


var nextButton = $(".next");
var prevButton = $(".prev");


nextButton.click(
  function() {
    var selected = $(".active");
    selected.removeClass("active");

    if (selected.hasClass("last")) {
      $(".first").addClass("active");
    } else {
      selected.next().addClass("active");
    }
  }
);

prevButton.click(
  function() {
    var selected = $(".active");
    selected.removeClass("active");

    if (selected.hasClass("first")) {
      $(".last").addClass("active");
    }
    selected.prev().addClass("active");
  }
);
