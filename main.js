/* Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
Se è <= 5 il quadrato diventa giallo,
  se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato */

$(document).ready(function () {

  $('.circle').on('click', function () {
    var $curCircle = $(this); //salvo relativo valore this current circle per poterlo usare all'interno ajax

    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int ",
      method: "GET",
      success: function (data) {
        // console.log(data);
        var rndNum = data.response;
        $curCircle.text(rndNum);
        if (rndNum <= 5) {
          $curCircle.css("background-color", "yellow");
        } else if (rndNum > 5) {
          $curCircle.css("background-color", "green");
        }
      },
      error: function (richiesta, stato) {
        console.log("c'è stato un errore: " + stato);

      }

    });

  })

});
