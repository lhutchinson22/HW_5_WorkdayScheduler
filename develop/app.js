$(document).ready(function () {
  console.log("sanity check");

  var timeblockContainer = document.getElementById("time-block");
  var fetchButton = document.getElementById("saveBtn");
  var currentDay = document.getElementById("currentDay");
  var myInputText = document.getElementsByClassName("myText");
  var hourInteger = document.getElementsByClassName("hour");

  // moment.js
  var now = moment().format("LLLL");
  console.log(now);
  currentDay.append(now);

  var nowCompare = moment().hour();

  function checkTime() {
    $(".time-block").each(function () {
      var parseHourInt = parseInt($(this).attr("id"));
      console.log(parseHourInt);

      // if the time is equal to the calendar time, an attribute will be added to div
      if (parseHourInt === nowCompare) {
        console.log("This is the time");

        $(this).children(".description").addClass("present");
      } else if (parseHourInt < nowCompare) {
        $(this).children(".description").addClass("present");
      } else {
        $(this).children(".description").addClass("future");
      }
    });
  }

  checkTime();

  //when savebtn is pressed save data to local storage
  $(".saveBtn").on("click", function () {
    console.log("save button is clicked");
    // var grabText = myInputText.textContent($("#myText"));
    var grabText = $(this).siblings(".description").val();
    console.log(grabText);
    localStorage.setItem("calendarItem", grabText);
  });
});
