// Clock section start
const hourTime = document.querySelector('.time-hour');
const minTime = document.querySelector('.time-min');
const secTime = document.querySelector('.time-sec');
const aMpM = document.querySelector('#am-time');
const greeting = document.querySelector('.message');

function concatZero(timeFrame) {
    return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame
}
function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();   
     hourTime.innerHTML =    `${concatZero((h % 12) || 12)}`;
     minTime.innerHTML  =    `${concatZero(m)}`;
     secTime.innerHTML  =    `${concatZero(s)}`;
     aMpM.innerHTML     =    `${h >= 12 ? 'PM' : 'AM'}`;
   
     //Greetings Text

  if((h < 12 )){
    greeting.innerHTML = "Good Morning !!";
    
    
  } 
  else if (h < 18 ){
    greeting.innerHTML = "Good Afternoon !!";
    

  }  

  else if(h < 20){
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

let date = new Date();
let hour = date.getHours();

switch (hour < 12){

  case (hour < 12):
  wakeup();
  break;

  case(hour < 18):
  lunch();
  break;

  case(hour < 23) :
  night();
  break;

}