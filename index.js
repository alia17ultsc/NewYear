function updateTime(){
  var timeleft = document.getElementsByClassName("timeLeft")[0];
  var dateTime = new Date();
  const targetDate = new Date('2026-01-01T00:00:00');
  const difference = targetDate - dateTime;

// Рассчитываем оставшиеся миллисекунды в различных единицах
const millisecondsInAnHour = 1000 * 60 * 60;
const millisecondsInADay = millisecondsInAnHour * 24;
const millisecondsInAMonth = millisecondsInADay * 30; // Приблизительное число для месяца

// Вычисляем оставшиеся дни, месяцы и часы
const remainingMonths = Math.floor(difference / millisecondsInAMonth);
const remainingDays = Math.floor((difference % millisecondsInAMonth) / millisecondsInADay);
const remainingHours = Math.floor((difference % millisecondsInADay) / millisecondsInAnHour);

// Выводим результат
console.log(`Осталось ${remainingMonths} месяцев, ${remainingDays} дней и ${remainingHours} часов до 01.01.2026`);


  var timeText = `${remainingDays + remainingMonths*30} days and ${remainingHours} hours until 01.01.2026`;
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