// Clock section start
const hourTime = document.querySelector('.time-hour');
const minTime = document.querySelector('.time-min');
const secTime = document.querySelector('.time-sec');
const aMpM = document.querySelector('#am-pm');
const greeting = document.querySelector('.message');

function takeZero(timeSpan) {
    return timeSpan < 10 ? '0'.concat(timeSpan) : timeSpan
}
function time() {
  var currentDate = new Date();
  var currentSeconds = currentDate.getSeconds();
  var currentMinute = currentDate.getMinutes();
  var currentHour = currentDate.getHours();   
     hourTime.innerHTML =    `${takeZero((currentHour % 12) || 12)}`;
     minTime.innerHTML  =    `${takeZero(currentMinute)}`;
     secTime.innerHTML  =    `${takeZero(currentSeconds)}`;
     aMpM.innerHTML     =    `${currentHour >= 12 ? 'PM' : 'AM'}`;
   
     //Greetings Text

  if((currentHour < 12 )){
    greeting.innerHTML = "Good Morning !!";
    
    
  } 
  else if (currentHour < 18 ){
    greeting.innerHTML = "Good Afternoon !!";
    

  }  

  else if(currentHour < 20){
    greeting.innerHTML = "Good Evening !!";
  }
  else{
    greeting.innerHTML = "Good Night !!";
  }
}
setInterval(time, 500);
// clock section end



// Image changing according to time
function wakeup(){
  const img = new Image();
  img.src = "images/wakeUp.png";
  img.setAttribute("alt","WakeUp_image");

  document.getElementById('change_img').appendChild(img);

  img.style.height = 608 + "px";
  img.style.width = 633 + "px";
  
  const spanText = document.getElementById('ltext');
  spanText.innerHTML = "Wake Up !!";
}

function lunch(){
  const img = new Image();
  img.src = "images/lunch.png";
  img.setAttribute("alt","Lunch_image");
  
  document.getElementById('change_img').appendChild(img);

  img.style.height = "650px";
  img.style.width = "650px";

  const spanText = document.getElementById('ltext');
  spanText.innerHTML = "Let's have some lunch !!";
}

function night(){
  const img = new Image();
  img.src = "images/goodNight.png";
  img.setAttribute("alt","GoodNight_image");
 
  document.getElementById('change_img').appendChild(img);

  const spanText = document.getElementById('ltext');
  spanText.innerHTML = "Good Night !!";
}

const date = new Date();
const hour = date.getHours();

// if(hour < 12){
//   wakeup();
// }

// else if(hour < 18){
//   lunch();
// }

// else{
//   night();
// }

switch (true){

  case (hour <= 12):
  wakeup();
  break;

  case (hour < 18):
  lunch();
  break;

  case (hour < 23) :
  night();
  break;

}