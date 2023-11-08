var countDownDate = 0;

// Update the count down every 1 second
var x;

function startTimer() {
  x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate;
      
    // Time calculations for days, hours, minutes and seconds
    
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML =hours + "H:"
    + minutes + "M:" + seconds+"S";
      
    // If the count down is over, write some text 
    
    countDownDate+=1000;
  }, 1000);
}

function stopTimer() {
  clearInterval(x);
}

function resetTimer() {
  clearInterval(x);
  document.getElementById("timer").innerHTML = "0H";
  countDownDate = 0;
}