let gameSeq = [];
let usrSeq = [];

let started = false;
let level = 0;
let highestScore = 0;

let h3 = document.querySelector("h3")

let btns = ["yellow", "red", "green", "purple"]

document.addEventListener("keypress", function(){
 if(started == false){
    console.log("Game is started");
    started = true;
    levelUp();

}

})

function checkAns(idx){
    if(gameSeq[idx] == usrSeq[idx]){
        if(gameSeq.length == usrSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        if(level > highestScore){
            highestScore = level;
        }
        else{
            highestScore;
        }
        
        h3.innerHTML = `Game Over !! <b>Highest Score is ${highestScore}</b> <br> <b>Your Score was ${level} </b> <br> Press any key to restart`
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function() {
        document.querySelector("body").style.backgroundColor = "white"            
        }, 100);
        gameReset();
    }
}

function userClicked(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    usrSeq.push(userColor);
    console.log(usrSeq)

    checkAns(usrSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", userClicked)
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function levelUp(){
    usrSeq=[];
    level = level + 1;
    
    h3.innerHTML =`Highest score was ${highestScore} <br> Level ${level}`;

    let randmIdx = Math.floor(Math.random() * 3);
    let randmColor = btns[randmIdx];
    let randmBtn = document.querySelector(`.${randmColor}`);
    console.log(randmColor);
    gameSeq.push(randmColor);
    console.log(gameSeq);
    btnFlash(randmBtn);

}

function gameReset(){
    started = false;
    level = 0;
    gameSeq = [];
    usrSeq = [];
}