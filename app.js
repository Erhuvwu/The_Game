// Highlighting the elements required
const container = document.querySelector(".container")
const opponentXButton = container.querySelector(".Opponent-X")
const opponentOButton = container.querySelector(".Opponent-O")
const boardSurface = document.querySelector(".board")
const opponentXturn = boardSurface.querySelector(".opponent-Xturn")
const opponentOturn = boardSurface.querySelector(".opponent-Oturn")
const cells = document.querySelectorAll(".cell")
const container1 = document.querySelector(".outcome")
const result = container1.querySelector(".win")
const restartButton = container1.querySelector(".restart-button")

window.onload = () =>{ // anytime the window loads
   
    xButton = ()=>{
        container.classList.add("hideContainer"); //when opponentX button is clicked, hide the container
        boardSurface.classList.add("showBoard"); //when opponentX button is clicked, show the board game
    }
    yButton = ()=>{
        container.classList.add("hideContainer");//when opponentO button is clicked, hide the container
        boardSurface.classList.add("showBoard"); //when opponentO button is clicked, show the board game
    }
}
let playBoard = ["", "", "", "", "", "", "", "", ""]
const positionOfWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const OpponentX_win = "Yipeee! Opponent(X) won"
const OpponentO_win = "Yipeee! Opponent(O) won"
const draw = "It's a draw!"

myFunction=()=>{
    return 'X'
}
myFunction1=()=>{
    return "O"
}
    let x = opponentXturn;
    let o = opponentOturn; 
    let select ="" 

    if(x!==""){
        select = "X"
    }else{
        select = "O"
    }
   
   
const computerMove=()=>{
    opponentOturn.style.backgroundColor = "blue"
    let random = Math.floor(Math.random() * 9) 
    if(!cells[random].innerHTML){
        console.log("found an empty cell")
        if(select=="X"){
            cells[random].innerHTML = "O"

        }else{
            cells[random].innerHTML = "X"
        }
    }else{
        computerMove()
    }
    opponentOturn.style.backgroundColor = "purple"
}
    for(let box of cells){
        box.addEventListener('click', ()=>{
            console.log("clicked a box")
            box.innerText = select
            computerMove()

        })
    }   
    // document.querySelector(".board-part").addEventListener('click', ()=>{
    //     console.log("clicked a box")

    // })
 
    



