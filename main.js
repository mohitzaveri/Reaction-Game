const mainmenu = document.querySelector(".main-menu");
const endscreen = document.querySelector(".end-screen");
const clickablearea = document.querySelector(".clickable-area");
const button = document.querySelector("button");

let timer;
let greenDisplayed;
let timeNow;

const init = function (){
    greenDisplayed = false;
}

const setGreenColor = function (){
    //3
    clickablearea.style.backgroundColor = "#32cd32";
    clickablearea.innerText = "Click Now!"
    greenDisplayed = true;
    timeNow = Date.now();
}

function startGame()
{   
    //2
    clickablearea.style.backgroundColor = "Red";
    clickablearea.innerText = "Wait for Green Color"   
    let randomNumber = Math.floor(Math.random() * 4000 + 3000);
    timer = setTimeout(setGreenColor, randomNumber); // 2 to 3
}

mainmenu.addEventListener("click", function(){
    //1
    mainmenu.classList.remove("active");
    startGame(); // 1 to 2
})

clickablearea.addEventListener("click", function() {
    //4
   if(greenDisplayed) {
    let clickTime = Date.now();
    let reactionTime = clickTime - timeNow;
    console.log(reactionTime);
    endsection(reactionTime); //4 to 5
   }
   else {
    console.log("Too early ");
   }
})

function endsection(reactionTime){
    //5
    endscreen.classList.add("active");
    const addReactionTime = document.querySelector(".reaction-time-text");
    addReactionTime.innerHTML= reactionTime;
}

button.addEventListener("click", function(){
    //6
    endscreen.classList.remove("active");
    mainmenu.classList.add("active");
})