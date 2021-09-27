// All Variables 
const hourTime = document.querySelector('.time-hour');
const minTime = document.querySelector('.time-min');
const secTime = document.querySelector('.time-sec');
const aMpM = document.querySelector('#am-pm');
const greeting = document.querySelector('.message');
const partyImg = document.getElementById("change_img");

const currentDate = new Date();
const currentSeconds = currentDate.getSeconds();
const currentMinute = currentDate.getMinutes();
const currentHour = currentDate.getHours(); 


const changeImg = document.getElementById("change_img");
const spanText = document.getElementById('ltext');
const partyText = document.getElementById("ptext");
const img = new Image();

const fun = document.querySelector(".party");





function takeZero(timeSpan) {
    return timeSpan < 10 ? '0'.concat(timeSpan) : timeSpan
}
function time() {
 
     hourTime.innerHTML =    `${takeZero((currentHour % 12) || 12)}`;
     minTime.innerHTML  =    `${takeZero(currentMinute)}`;
     secTime.innerHTML  =    `${takeZero(currentSeconds)}`;
     aMpM.innerHTML     =    `${currentHour >= 12 ? 'PM' : 'AM'}`;
   


}
setInterval(time, 500);

  
 if(currentHour >= 18 && currentHour < 20){
  greeting.innerHTML = "Good Evening !!";
 }

// Image changing according to time



function wakeup(){
 
  img.src = "images/wakeUp.png";
  img.setAttribute("alt","wakeup_Img");
  img.setAttribute("id","wake");

  changeImg.appendChild(img);

  img.style.height = 608 + "px";
  img.style.width = 633 + "px";
  
  greeting.innerHTML = "Good Morning !!";
  spanText.innerHTML = "Wake Up !!";
}

function lunch(){
 
  img.src = "images/lunch.png";
  img.setAttribute("alt","Lunch_image");
  img.setAttribute("id","wake");
  
  changeImg.appendChild(img);

  img.style.height = "650px";
  img.style.width = "650px";

  greeting.innerHTML = "Good Afternoon !!";
  spanText.innerHTML = "Let's have some lunch !!";
}

function night(){
  
  img.src = "images/goodNight.png";
  img.setAttribute("alt","GoodNight_image");
  img.setAttribute("id","wake");
 
  changeImg.appendChild(img);

  greeting.innerHTML = "Good Night !!";
  spanText.innerHTML = "Good Night !!";
  
}


function currentState(){
  switch (true){

  case (currentHour >=5 && currentHour < 12):
  wakeup();
  break;

  case (currentHour >= 12 && currentHour< 18):
  lunch();
  break;

  case (currentHour >= 18 && currentHour < 24) :
  night();
  break;

  }
  

}

currentState();

//Party button

fun.addEventListener("click", ()=>{
  
  partyText.innerHTML = "End the Party";
  
  
  img.src =  "./images/party.png";
  changeImg.appendChild(img);

  img.style.height = "540px";
  img.style.width = "630px";
  img.style.marginTop = "40px";

  greeting.innerHTML = "Let's Party !!";

  spanText.innerHTML = "Let's Have an Amazing Party !!";


});

  fun.addEventListener("dblclick", ()=>{
    partyText.innerHTML = "Party Time";
    
    currentState();
  });



