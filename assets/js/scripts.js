function firstMove() {
    document.turn = "X";
    showGameMsg( document.turn.bold().big() + " starts");
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
    showGameMsg( document.turn.bold().big() + " has to move!");
}

function checkWinner(move) {
    if (verifyTris(1,2,3,move)) {
         showGameMsg( document.turn.bold().big() + " won!");
    }
}

function verifyTris(x,y,z,move){
    if (retrieveCell(x) == retrieveCell(y) == retrieveCell(z) == move)
    showGameMsg( document.turn.bold().big() + " won!");

}

function retrieveCell(number) {
    return document.getElementById("c" + number).innerHTML;

}

function stopPlayer() {

}

function startOver () {
     location.reload();
    };



//theme-switcher

