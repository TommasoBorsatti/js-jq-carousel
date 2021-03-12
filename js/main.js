


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


function prevScroll() {
  var selected = $(".active");
  selected.removeClass("active");

  if (selected.hasClass("first")) {
    $(".last").addClass("active");
  }
  selected.prev().addClass("active");
}



prevButton.click(prevScroll());


// il bullet premuto cambia colore
$(".nav > i").click(
  function() {
    $(".nav i").removeClass("active");
    $(this).addClass("active");
  }
);

// la pagina stampa i tasti premuti
$(document).keydown(function(evt){
    alert(evt.keyCode);
});

// ALLA PRESSIONE DEI TASTI FRECCIA
