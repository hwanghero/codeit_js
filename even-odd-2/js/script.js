$("#even-btn").on("click", function () {
  $(".card").each(function () {
    $(this).removeClass("selected");
    var number = Number($(this).text());
    if (number % 2 == 0) {
      $(this).addClass("selected");
    }
  });
});
$("#odd-btn").on("click", function () {
  $(".card").each(function () {
    $(this).removeClass("selected");
    var number = Number($(this).text());
    if (number % 2 != 0) {
      $(this).addClass("selected");
    }
  });
});
