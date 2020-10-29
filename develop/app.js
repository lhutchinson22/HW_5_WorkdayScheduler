$(document).ready(function () {
  console.log("sanity check");

  var timeblockContainer = document.getElementById("time-block");
  var fetchButton = document.getElementById("saveBtn");
  var currentDay = document.getElementById("currentDay");
  var myInputText = document.getElementById("myText");
  var hourInteger = document.getElementsByClassName("hour");

  // moment.js
  var now = moment().format("LLLL");
  console.log(now);
  currentDay.append(now);

  function checkTime() {
    $(".time-block").each(function () {
      var parseHourInt = parseInt($(this).attr("id"));
      console.log(parseHourInt);
    });
  }

  checkTime();

  // if the time is equal to the calendar time, an attribute will be added to div
  //   if (now === parseHourInt) {
  //     console.log("This is the time");
  //   }

  //when savebtn is pressed save data to local storage
  //   $(".saveBtn").on("click", function () {
  //     console.log("save button is clicked");
  //     var grabText = myInputText.textContent($("#myText"));

  //     console.log(grabText);
  //   });
});
//dynamic html = colors and if items are saved, items are saved in hour time slot
