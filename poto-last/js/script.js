function scroll_event() {
  var doucment_top = $(window).scrollTop(); // 스크롤 값 구하고
  var about_pos = $(".about").position().top - 10; // about top (div 맨위 좌표) 구하고

  if (doucment_top > about_pos) {
    $(".menu-right button").css("color", "#4A4A4A");

    // about 안에 작동하면 되는거여서 위에 있었음.
    // find 할 필요 없이 바로 .skill에서 each 돌리면 됐었음.

    $(".skill").each(function () {
      // 자바스크립트 animate 넣을때 퍼센트도 들어가는걸 까먹었네
      // 그냥 때려쳐넣으면 작동함.
      // 그리고 안에 있기만 하면 되는거여서
      var percentage = $(this).find(".percentage").text();
      $(this).find(".inner-bar").animate(
        {
          width: percentage,
        },
        1000
      );
    });
  } else {
    $(".menu-right button").css("color", "white");
  }

  // 화면 뜨게
  /*
    전에 배웠던거 쓰면됨
    1. 화면의 끝을 구한다
    2. vertical 반복을 해서 하나하나 위치 중앙을 찾는다
    3. 애니메이션 발동해서 올려준다.

    --

    안됐던 이유
    find를 섹션으로 해서 전부다 떴던거임.
    this로 하여 확인된것만 해야하는데,
  */

  $("section").each(function () {
    if ($(window).scrollTop() >= $(this).position().top - 10) {
      $(this).find(".vertical-center").animate({ opacity: 1, top: 0 }, 1000);
    }
  });
}
$(window).on("scroll", scroll_event);

$(".menu-right button").on("click", header_click);

function header_click() {
  if ($(this).attr("id") == "about-btn") {
    $("html, body").animate({ scrollTop: $(".about").position().top });
  }
  if ($(this).attr("id") == "contact-btn") {
    $("html, body").animate({ scrollTop: $(".contact").position().top });
  }
}
scroll_event();
