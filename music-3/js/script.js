$(window).on("scroll", function (e) {
  var nowScroll = $(this).scrollTop();
  console.log(nowScroll);

  var playlist = $("ul .playlist");
  console.log(playlist);

  //   playlist.css("opacity", "1");
});

/*
    1. playlist 위치를 가져온다.
    2. 그 위치를 계산한다
    3. 투명도 조절.
*/
