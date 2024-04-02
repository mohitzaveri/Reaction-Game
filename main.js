const mainmenu = document.querySelector(".main-menu");
const endscreen = document.querySelector(".end-screen");
const clickablearea = document.querySelector(".clickable-area");
const button = document.querySelector("button");
const tooSoonV = document.querySelector(".tooSoon");

let timer;
let timeNow;
let greenDisplayed = false;

const setGreenColor = function (){
    console.log("Reaction Screen Green Color");
    clickablearea.style.backgroundColor = "#32cd32";
    clickablearea.innerText = "Click Now!"
    greenDisplayed = true;
    timeNow = Date.now();
}

function startGame()
{   
    clearTimeout(timer);
    console.log("Game STarted Wait For Green Light");
    clickablearea.style.backgroundColor = "Red";
    clickablearea.innerText = "Wait for Green Color"   
    let randomNumber = Math.floor(Math.random() * 4000 + 3000);
    timer = setTimeout(setGreenColor, randomNumber); 
}

mainmenu.addEventListener("click", function(){
    //1
    console.log("Main-Menu-Click");
    mainmenu.classList.remove("active");
    startGame(); 
})

clickablearea.addEventListener("click", function() {
    console.log("clickableareaclick");
   if(greenDisplayed) {
    let clickTime = Date.now();
    let reactionTime = clickTime - timeNow;
    console.log(reactionTime);
    endsection(reactionTime); 
   }
   else {
    console.log("Too Sone");
    tooSoonScreen();
   }
})

function endsection(reactionTime){
    console.log("endsectionclick");
    endscreen.classList.add("active");
    const addReactionTime = document.querySelector(".reaction-time-text");
    addReactionTime.innerHTML= reactionTime;
    return
}

button.addEventListener("click", function(){
    console.log("button.click");
    endscreen.classList.remove("active");
    mainmenu.classList.add("active");
})

function tooSoonScreen(){
    console.log("Too-Soon-Screen");
    tooSoonV.classList.add("active");
}

tooSoonV.addEventListener("click", function() {
    console.log("Too-Soon-Click");
    tooSoonV.classList.remove("active");
    startGame();
 })
