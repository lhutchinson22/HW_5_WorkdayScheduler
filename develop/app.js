$(document).ready(function () {
  console.log("sanity check");

  var timeblockContainer = document.getElementById("time-block");
  var fetchButton = document.getElementById("saveBtn");
  var currentDay = document.getElementById("currentDay");
  var hourInteger = document.getElementsByClassName("hour");
  var appendDescription = document.getElementsByClassName("description");

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
        $(this).children(".description").addClass("past");
      } else {
        $(this).children(".description").addClass("future");
      }
    });
  }

  checkTime();

  //when savebtn is pressed save data to local storage
  $(".saveBtn").on("click", function () {
    console.log("save button is clicked");
    var value = $(this).data("value");
    console.log(value);

    var grabText = $(this).siblings(".description").val();
    console.log(grabText);
    localStorage.setItem("calendarItem" + value, grabText);
  });

  // get most recent submission
  function initializeLocalStorage() {
    for (let id = 9; id <= 18; id++) {
      var item = localStorage.getItem("calendarItem" + id);
      if (item) {
        console.log(item);
        $("#" + id)
          .find(".description")
          .val(item);
      }
    }
  }

  initializeLocalStorage();
});
