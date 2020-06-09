function scroll_event() {
  var screen_bottom = $(window).scrollTop() + $(window).height(); // 2개를 합치면 (스크롤 맨위 기준 + 화면 높이) 맨밑의 값 가져오기

  $(".playlist").each(function () {
    var playlist_half = $(this).position().top + $(this).outerHeight() / 2;
    if (playlist_half < screen_bottom) {
      $(this).animate({ opacity: "1" }, 1500);
    }
  });

  if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
    $(".to-top-btn").fadeIn(1000);
  } else {
    $(".to-top-btn").fadeOut(1000);
  }
}

$(window).on("scroll", scroll_event);

$(".to-top-btn").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});
