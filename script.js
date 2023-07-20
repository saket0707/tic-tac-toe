let music = new Audio("music.mp3");
let turnmusic = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let isgameover = false;
let turn= "X";

//function to change turn 
const changeTurn = () =>{
    return turn === "X"? "0": "X";
}

//function to check for a win
 const checkWin = ()=>{
    let boxtexts= document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "") ){
            isgameover=true;
            document.querySelector('.info').innerText= boxtexts[e[0]].innerText + " Won";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    });

} 


//main logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText==""){
            boxtext.innerText=turn;
            turn=changeTurn();
            turnmusic.play();
            checkWin(); 
            
            if (!isgameover ) {
                document.querySelector('.info').innerText= "Turn for " + turn;
            }  
        }
    })

})

document.getElementById('reset').addEventListener('click',()=>{
    turn="X";
    let boxes = document.getElementsByClassName('boxtext');
    Array.from(boxes).forEach(element=>{
        element.innerText="";
        
    })
    document.querySelector('.info').innerText= "Turn for " + turn;
    isgameover=false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
    document.querySelector(".line").style.width = "0px";
});