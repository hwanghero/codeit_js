$("#btn1").on("click", function () {
  $(".blue").addClass("flag down");
  setTimeout(someFunction, 1000, $(".blue"));
});
$("#btn2").on("click", function () {
  $(".white").addClass("flag down");
  setTimeout(someFunction, 1000, $(".white"));
});
$("#btn3").on("click", function () {
  $(".blue.dot").addClass("flag down");
  setTimeout(someFunction, 1000, $(".blue.dot"));
});

function someFunction(event) {
  console.log(event);
  event.removeClass("down");
}
