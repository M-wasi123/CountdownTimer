let user = document.getElementById("date");
let image = document.getElementById('gifImg');
let container = document.getElementById('miniContainer');
var audioPlayer = document.getElementById('audioPlayer');
var audioSource = document.getElementById('audioSource');
let clock;
function subm() {
  audioPlayer.play();
  let targetDate = new Date(user.value + 'T08:00:00').getTime();
  let targetDates = new Date(user.value);

let dayName = targetDates.toLocaleString('en-US',{weekday: 'short'})
  let currentDate = new Date().getTime();

  let difference = targetDate - currentDate;

let days = Math.floor(difference / (1000 * 60 * 60 * 24));
let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((difference % (1000 * 60)) / 1000);

clearInterval(clock)
clock = setInterval(function time() {
  
  seconds--;
  if (seconds < 0) {
    seconds = 60;
    minutes--;
  } 
  else if (minutes < 0) {
    minutes = 60;
    hours--;
  }
  else if (hours < 0) {
    days--;
    hours = 24;
  }
  else if (days <= 0 && hours <= 0 && minutes <= 0) {
    clearInterval(clock)
    seconds = 0;
  }
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    image.style.display = 'block'
    container.style.display = 'none'
    function songPlay() {
      audioPlayer.play();
    }
  
      }
    
document.getElementById("time1").innerText = `${dayName}`
document.getElementById("time2").innerText = `${days.toString().padStart(2 , '0')}`
document.getElementById("time3").innerText = `${hours.toString().padStart(2 , '0')}`
document.getElementById("time4").innerText = `${minutes.toString().padStart(2 , '0')}`
document.getElementById("time5").innerText = `${seconds.toString().padStart(2 , '0')}`
  
},1)





}

audioSource.src = "38-Michael-Riepen-Happy-Birthday(chosic.com).mp3";
        audioPlayer.load();

