
// DEFINITE VARIABILI GLOBALI

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

// ASSEGNO LE FUNZIONI AI TASTI FRECCIA

// la pagina legge i tasti premuti dal document; a ogni tasto è assegnato un keycode.

// al keycode 37 (freccia sinistra) corrisponde la funzione prevScroll.
$(document).keydown(function(evt){
    if(evt.keyCode == 37){
      prevScroll();
    }
});

// al keycode 39 (freccia destra) corrisponde la funzione prevScroll.
$(document).keydown(function(evt){
    if(evt.keyCode == 39){
      nextScroll();
    }
});


//BONUS

// il bullet premuto cambia colore e viene selezionata l'immagine corrispondente;
$(".nav > i").click(
  function() {
    $(".nav i").removeClass("active");
    $(".images img").removeClass("active");
    $(this).addClass("active");
    var imgIndex = $(this).index();
    var imgSorted = $(".images img").eq(imgIndex);
    imgSorted.addClass("active");
  }
);
