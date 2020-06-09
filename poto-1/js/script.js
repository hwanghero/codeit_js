function scroll_event() {
  var bottom = $(window).scrollTop() + $(window).height();

  var playlists = $(".playlist");
  for (var i = 0; i < playlists.length; i++) {
    var playlist = $(playlists[i]);
    var playlist_height = playlist.position().top + playlist.outerHeight() / 2;
    console.log(playlist_height);

    if (playlist_height < bottom) {
      playlist.animate({ opacity: 1 }, 1500);
    }
  }
}

$(window).on("scroll", scroll_event);

scroll_event();
