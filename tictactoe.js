let box=document.querySelectorAll(".box");
let reset=document.querySelector(".reset")
let turnO=true;
let msgb=document.querySelector(".msg");
let msg=document.querySelector(".winner");
let newg=document.querySelector(".newGame");
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disableboxes=()=>{
    for(let b of box){
        b.disabled=true;
    }
}
const enableboxes=()=>{
    for(let b of box){
        b.disabled=false;
       b.innerText="";
    }
}

const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgb.classList.add("hide");
    count=0;
}
 
box.forEach((b)=>{
    b.addEventListener("click",()=>{
        if(turnO===true){
            b.innerText="O";
            turnO=false;
            count=count+1;
        }
        else{
            b.innerText="X";
            turnO=true;
            count=count+1;
        }
        if(count==9){
            msg.innerText="The game is a tie";
            msgb.classList.remove("hide");
        }
        b.disabled=true;
        checkWinner();
    })
});

const showWinner=(win)=>{
    msg.innerText=`Congratulations, winner is ${win}`;
    msgb.classList.remove("hide");
    disableboxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let val1=box[pattern[0]].innerText;
        let val2=box[pattern[1]].innerText;
        let val3=box[pattern[2]].innerText;
        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val1===val3){
                showWinner(val1);
            }
        }
    }
}


reset.addEventListener("click",resetGame);
newg.addEventListener("click",resetGame);