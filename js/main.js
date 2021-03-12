


var nextButton = $(".next");
var prevButton = $(".prev");


// DEFINISCO FUNZIONI DA RIUTILIZZARE


  function nextScroll() {
    var selected = $(".active");
    selected.removeClass("active");

    if (selected.hasClass("last")) {
      $(".first").addClass("active");
    } else {
      selected.next().addClass("active");
    }
  }



 function prevScroll() {

    var selected = $(".active");
    selected.removeClass("active");

    if (selected.hasClass("first")) {
      $(".last").addClass("active");
    } else {
    selected.prev().addClass("active");
    }
  }

// ASSEGNO LE FUNZIONI AL CLICK

prevButton.click(prevScroll);
nextButton.click(nextScroll);

// ASSEGNO LE FUNZIONI AI TASTI

// la pagina stampa i tasti premuti
$(document).keydown(function(evt){
    alert(evt.keyCode);
});



// il bullet premuto cambia colore
$(".nav > i").click(
  function() {
    $(".nav i").removeClass("active");
    $(this).addClass("active");
  }
);



// ALLA PRESSIONE DEI TASTI FRECCIA
