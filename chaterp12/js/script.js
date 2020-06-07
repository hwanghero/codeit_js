$("#send").on("click", function () {
  console.log($(".text-box textarea").val());
  if ($(".text-box textarea").val() === "") {
    alert("메세지를 적어주세요!");
    $(".text-box textarea").focus();
    return;
  }

  $(".chatbox").append(
    '<div class="my-bubble bubble">' +
      ($(".text-box textarea").val() + "</div>")
  );

  $(".text-box textarea").val("");
});
