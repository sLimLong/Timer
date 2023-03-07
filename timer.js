function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    if (t.total <= 0) {
      document.getElementById("countdown").className = "hidden";  
      document.getElementById("deadline-message").className = "visible";
      clearInterval(timeinterval);
      return true;
    }
 
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}



var deadline = '2023-4-04';
initializeClock('countdown', deadline);


