var sentence_count = function() {
  sentences = [];
  return sentences;
};

$(document).ready(function() {
  $("form#sentence").submit(function(event) {

    var sentence = $('input#sentence').val();

    $("#story").append("<li>" + sentence + "</li>");
    $("ul#story").children("li").hide();
    $("ul#story").children("li").last().show();
    $("#story-length").empty().append($("ul#story li").size() - 1);

    $("button#show-story").click(function() {
      $("ul#story").children("li").show();
    });

    $("button#start-over").click(function() {
      $("ul#story").children("li").empty();
    });

    event.preventDefault();
  });
  var $overlay = $('<div id="complete-story"></div>');
  var $artwork = $('<div id="box"><h3>Surrealist artists developed the Exquisite Corpse game in 1918. At that time, it involved drawing part of a creature, then folding a piece of paper over so only a small part of the drawing was revealed. The next artist would draw another piece of the creature and so on. Here are some of the original artworks.</h3><row><div class="four columns"><img src="img/1.png"></div><div class="four columns"><img src="img/2.jpg"></div><div class="four columns"><img src="img/3.jpg"></div></row></div>');

  $("body").append($overlay);
  $overlay.append($artwork);

  $("button#overlay").click(function() {
    $overlay.show();
  });

  $overlay.click(function() {
    $overlay.hide();
  });
});
