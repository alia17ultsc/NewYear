function updateTime(){
  var timeleft = document.getElementsByClassName("timeLeft")[0];
  var dateTime = new Date();
  var timeText = `${31-dateTime.getDate()} days ${23-dateTime.getHours()} hours ${59-dateTime.getMinutes()} minutes ${59-dateTime.getSeconds()} seconds`;
  timeleft.innerHTML=timeText;
  setTimeout(updateTime, 1000);
}

updateTime();