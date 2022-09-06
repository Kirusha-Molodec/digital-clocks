function ShowTime() {
    var now = new Date();
    let hours = "00";
  let currentHour = now.getHours();
  if (currentHour >= 14 && currentHour < 22) {
      /*     var hrs = 19-now.getHours(); */
      waitFor(hours);
      
  } else {
      var n = now.getHours();
      if (n == 23) n = -1;
      if (n == 22) n = -2;
      var hoursToChange = (13-n).toString();
     
      waitFor(hoursToChange);
  }
  } 
  
  function waitFor(hours) {
      var now = new Date();
      var mins = (59 - now.getMinutes()).toString();
      var secs = (59 - now.getSeconds()).toString();
      if (hours.length == 2) {
          $("#hours").html(hours[0]);
          $("#hoursSec").html(hours[1]);
      } else {
          $("#hours").html(0);
          $("#hoursSec").html(hours[0]);
      }
      if (mins.length == 2) {
          $("#minutes").html(mins[0]);
          $("#minutesSec").html(mins[1]);
      } else {
          $("#minutes").html(0);
          $("#minutesSec").html(mins[0]);
      }
      if (secs.length == 2) {
          $("#seconds").html(secs[0]);
          $("#secondsSec").html(secs[1]);
      } else {
          $("#seconds").html(0);
          $("#secondsSec").html(secs[0]);
      }
  }
  
    var countdown;
    function StopTime() {
        clearInterval(countdown);
        
    }
    
    setInterval(ShowTime ,1000);