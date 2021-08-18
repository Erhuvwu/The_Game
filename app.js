// Highlighting the elements required
const container = document.querySelector(".container")
const opponentXButton = container.querySelector(".Opponent-X")
const opponentOButton = container.querySelector(".Opponent-O")
const boardSurface=document.querySelector(".board")

window.onload = () =>{ // anytime the window loads
    xButton = ()=>{
        container.classList.add("hideContainer");//when opponentX is clicked, hide the container
        boardSurface.classList.add("showBoard");
    }
    yButton = ()=>{
        container.classList.add("hideContainer");//when opponentX is clicked, hide the container
        boardSurface.classList.add("showBoard");
    }
}



