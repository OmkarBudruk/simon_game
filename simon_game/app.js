let gameseq=[]
let userseq=[]
let h2= document.querySelector("h2")
let btns=["yellow","red","purple","pink"]
let level=0
let starded=false
let Hscore=0
document.addEventListener("keypress", function(){
if (starded==false){
    started=true

    levelup();
}
});
 function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250)
 }

 function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250)
 }



function levelup(){
    userseq=[]
    level++;

    h2.innerText=`level ${level}`

    let randIndx=Math.floor(Math.random() * 4);
    let randcolor=btns[randIndx];
    let randbtn=document.querySelector(`.${randcolor}`);
    
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
    console.log("rjdidf",randbtn);
}

function checkAns(indx){
    
    if(gameseq[indx]===userseq[indx]){
    if (userseq.length===gameseq.length){
        setTimeout(levelup,1000);
    }
    }
    else{
        if (Hscore<=level){
            Hscore=level-1
        }
        h2.innerHTML=`Game End! Your score is <b>${level-1}</b>, <br>Reset Your game by pressing any key
        <br>And Your Highest Score is <b> ${Hscore}</br> `;
        
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white"
        },1000)
        
        reset()    
       
    }
}
function btnPressed (){
    console.log(this)
    let btn=this
    userflash(btn)

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}
let allbtns= document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPressed)

}
 function reset(){
    gameseq=[]
    userseq=[]
    level=0
    starded=false
 }