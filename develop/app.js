console.log("sanity check");

var timeblockContainer = document.getElementById("time-block");
var fetchButton = document.getElementById("saveBtn");
var currentDay = document.getElementById("currentDay");

var now = moment().format("LLLL");
console.log(now);
currentDay.append(now);

//dynamic html = colors and if items are saved, items are saved in hour time slot
