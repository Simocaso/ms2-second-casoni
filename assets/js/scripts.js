function firstMove() {
    document.turn = "X";
    showGameMsg( document.turn + " starts");
}

function showGameMsg(message) {
    document.getElementById("game-msg").innerHTML = message;
}

function nextMove(cell){
    cell.innerHTML = document.turn;
    switchPlayer();
}

function switchPlayer() {
    if (document.turn == "X") {
        document.turn = "0";
    } else {
        document.turn = "X"
    }
}


function startOver () {
     location.reload();
    };

//theme-switcher
