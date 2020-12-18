function firstMove() {
    document.turn = "X";
    showGameMsg( document.turn.bold().big() + " starts");
}

function showGameMsg(message) {
    document.getElementById("game-msg").innerHTML = message;
}

function nextMove(cell){
    if (cell.innerHTML == "") {
    cell.innerHTML = document.turn;
    switchPlayer();
    }
}

function switchPlayer() {
    if (checkWinner(document.turn)) {
        showGameMsg(document.turn.bold().big() + " Won !".bold().big().italics())
    } else if (document.turn == "X") {
        document.turn = "0";
        showGameMsg( document.turn.bold().big() + " has to move!");
    } else {
        document.turn = "X";
        showGameMsg( document.turn.bold().big() + " has to move!");
    }
    
}

function checkWinner(move) { //let this function change the message, see swicthPlayer function
    var result = false;
    if (verifyTris(1,2,3,move) ||
       verifyTris(4,5,6, move) ||
       verifyTris(7,8,9, move) ||
       verifyTris(1,5,9, move) ||
       verifyTris(3,5,7, move) ||
       verifyTris(1,4,7, move) ||
       verifyTris(2,5,8, move) ||
       verifyTris(3,6,9, move)) {
       result = true;
       }   
       return result;
}

function verifyTris(x,y,z,move){
    var result = false;
    if (retrieveCell(x) == move && retrieveCell(y) == move && retrieveCell(z) == move) {
       result = true;
    }  return result;
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

