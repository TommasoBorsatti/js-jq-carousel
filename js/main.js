


var nextButton = $(".next");
var prevButton = $(".prev");


// AL CLICK

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


$(".nav > i").click(
  function() {
    $(".nav i").removeClass("active");
    $(this).addClass("active");

  }
);



// ALLA PRESSIONE DEI TASTI FRECCIA

// .on("keypress")(
//   function() {
//     var selected = $(".active");
//     selected.removeClass("active");
//
//     if (selected.hasClass("last")) {
//       $(".first").addClass("active");
//     } else {
//       selected.next().addClass("active");
//     }
//   }
// );
//
// $("right").keypress(
//   function() {
//     var selected = $(".active");
//     selected.removeClass("active");
//
//     if (selected.hasClass("first")) {
//       $(".last").addClass("active");
//     }
//     selected.prev().addClass("active");
//   }
// );
