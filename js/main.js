
$(function() {

      var nextButton = $(".next");
      var prevButton = $(".prev");
      var selected = $(".images img.active");

      nextButton.click(
      function() {
      selected.removeClass("active");
      selected.next().addClass("active");
      }
    );
  }
);
