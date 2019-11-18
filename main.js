/* Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
Se è <= 5 il quadrato diventa giallo,
  se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato */

function getRandomNumber(clickEl) {
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/random/int ",
    method: "GET",
    success: function (data) {
      console.log('success', data);
      var rndNum = data.response;
      console.log('data-response', rndNum);
      showNumColor(clickEl, rndNum);
    },
    error: function (error) {
      console.log("error" , error);
    }
  });
}

function showNumColor(clickEl, num) {
  clickEl.text(num);
  if (num <= 5) {
    clickEl.css("background-color", "yellow");
  } else if (num > 5) {
    clickEl.css("background-color", "green");
  }
}

$(document).ready(function () {

  $('.circle').on('click', function () {
    var $clickEl = $(this); 

    getRandomNumber($clickEl);

  })

});
