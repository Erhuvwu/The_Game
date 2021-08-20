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

window.onload = () => { // anytime the window loads

     xButton = () => {
        container.classList.add("hideContainer"); //when opponentX button is clicked, hide the container
        boardSurface.classList.add("showBoard"); //when opponentX button is clicked, show the board game
    }
     yButton = () => {
        container.classList.add("hideContainer");//when opponentO button is clicked, hide the container
        boardSurface.classList.add("showBoard"); //when opponentO button is clicked, show the board game
    }
}
let playBoard = ["", "", "", "", "", "", "", "", ""]
const positionsOfWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let isGameOn = true

const OpponentX_win = "Yipeee! Opponent(X) won"
const OpponentO_win = "Yipeee! Opponent(O) won"
const draw = "It's a draw!"

// check if there is a winner
function checkResult() {
    let gameWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = positionsOfWin[i];
        const a = playBoard[winCondition[0]];
        const b = playBoard[winCondition[1]];
        const c = playBoard[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            gameWon = true;
            break;
        }
    }

    if (gameWon) {
        winner(select ==="X" ? OpponentX_win : OpponentO_win);
        isGameOn = false
        return
    }

    if (!playBoard.includes('')) {//if no winner and no empty cell left
        winner(draw);
    }
}
const winner = (type) => {//switch between the  game results
    switch (type) {
        case OpponentO_win:
            result.innerHTML = 'Yipee! Opponent(O) won'
            break
        case OpponentX_win:
            result.innerHTML = 'Yipee! Opponent(X) won'
            break
        case draw:
            result.innerText = 'Urgh! It is a draw!'
    }
    console.log(`winner is`)
    result.classList.add("showOutcome")
}
const updatePlayBoard = (i) => {
    playBoard[i] = select;
}
//make sure the opponent plays on empty cells
const isCellFilled = (cell) => {
    if (cell.innerText === 'X' || cell.innerText === 'O') {
        return false;
    }

    return true;
}

myFunction = () => {
    return 'X'
}
myFunction1 = () => {
    return "O"
}
let x = opponentXturn;
let o = opponentOturn;
let select = ""

if (x !== "") {
    select = "X"
} else {
    select = "O"
}

const computerMove = () => {
    opponentOturn.style.backgroundColor = "blue"
    let random = Math.floor(Math.random() * 8)
    if (!cells[random].innerHTML) {
        console.log("found an empty cell")
        if (select == "X") {
            cells[random].innerHTML = "O"
            select = "O"
        } else {
            cells[random].innerHTML = "X"
            select = "X"
        }
    } else {
        computerMove()
    }
}
//opponentOturn.style.backgroundColor = "purple"
for (let box of cells) {
    box.addEventListener('click', () => {
        opponentXturn.style.backgroundColor = "purple"
        if (isCellFilled(box) && isGameOn) {
            console.log("clicked a box")
            box.innerText = select
            let delayTime = ((Math.random() * 800) + 200).toFixed()//computer delays randomly b4 playing
            setTimeout(() => {
                computerMove()
            }, delayTime)//passing the delay time
        }
    })
    updatePlayBoard()
    checkResult()
}
restartButton.onclick = () => {
    window.location.reload()
}






