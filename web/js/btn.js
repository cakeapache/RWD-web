toggle = false;
$("button.list-btn").click(function() {
  if (toggle) {
      $("#line1").removeClass("open");
      $("#line2").removeClass("open");
      $("#nav-list").removeClass("list");
  } else {
    $("#line1").addClass("open");
    $("#line2").addClass("open");
    $("#nav-list").addClass("list");
  }
  toggle = !toggle;
})