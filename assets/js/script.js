$(document).ready(function () {
  var saveBtnEl = $(".saveBtn");
  saveBtnEl.on("click", function () {
    var inputTime = $(this).parent().attr("id");
    var inputVal = $(this).siblings("textarea").val();
    localStorage.setItem(inputTime, inputVal);
  });

  var hour = dayjs().hour();

  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

    if (timeBlockHour < hour) {
      $(this).addClass("past");
    } else if (timeBlockHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  for (var i = 9; i < 17; i++) {
    $("#hour-" + i + " textarea").val(localStorage.getItem("hour-" + i));
  }

  $("#currentDay").text(dayjs().format("MM/DD/YYYY"));
});
