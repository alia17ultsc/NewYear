function updateTime(){
  var timeleft = document.getElementsByClassName("timeLeft")[0];
  var dateTime = new Date();
  var timeText = `${31-dateTime.getDate()} days ${23-dateTime.getHours()} hours ${59-dateTime.getMinutes()} minutes ${59-dateTime.getSeconds()} seconds`;
  timeleft.innerHTML=timeText;
  setTimeout(updateTime, 1000);
}

updateTime();

function showPresentText(presentId){
  var presentText = document.getElementById(presentId);
  presentText.style.display="block";
  setTimeout(hidetxt, 3000, [presentId]);
}

function hidetxt(presentId){
  var presentText = document.getElementById(presentId);
  presentText.style.display="none";
}

function blueDecorMove() {

var blueDec = document.getElementsByClassName('pc');

  for (var i = 0; i<60; i++){
    for (var index = 0; index < blueDec.length; index++){
      blueDec[index].style.width="5vw";
    }

  }
}