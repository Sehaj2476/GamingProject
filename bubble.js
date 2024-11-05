let timer = 60;
let score = 0;
let hitrn = 0 ;

//function to create bubble
function makebubble(){
let clutter = "";

for(let i=1;i<=24*8;i++){
    let rand = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rand}</div>`;
}

document.querySelector('.pbtm').innerHTML = clutter;
}

//function to run timer 
function runTimer(){
    let time = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timerVal').textContent = timer;
        }
        else{
            clearInterval(time);
            document.querySelector('.pbtm').innerHTML = `<h1 style="margin-left:32rem;margin-top:10rem;">Game Over</h1>`;
        }
    },1000);
}

//function to get New Hit
function newHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#getHit').textContent = hitrn;
}

//function to increase score
function increaseScore(){
    score += 10;
    document.querySelector('#getScore').textContent = score;
}

document.querySelector('.pbtm').addEventListener("click", function(dets){
    if(dets.target.classList.contains('bubble')){
        var clickedNum = Number(dets.target.textContent);
        if (clickedNum === hitrn){
            increaseScore();
            makebubble();
            newHit();
        };
    } 
})
makebubble();
newHit();
runTimer();
     


