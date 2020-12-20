/* This code was created with the help of multiple tic tac toe tutorials which have been used as reference guides and to understand the logic behind many functions,
that being said the code has been modified from the original and no function remains exactly the same as
in the original code, with some being changed more than others.
*/

//This function let the restart button call multiple funtion
function multipleFunctions() {
    firstMove();
    gameCount();
}

//This function let the game count increment whenever the restart button it's clicked
function gameCount() {
        var el = document.getElementById("game-counter");
        var currentCount = el.innerText;
        el.innerText = ++currentCount;
      }

//This function set X as first symbol and use the clearBoard function to erase all the cells 
function firstMove() {
    clearBoard(1);
    clearBoard(2);
    clearBoard(3);
    clearBoard(4);
    clearBoard(5);
    clearBoard(6);
    clearBoard(7);
    clearBoard(8);
    clearBoard(9); 
    document.turn = "X";
    varEmpty = null;
    showGameMsg( document.turn.bold().big() + " starts");
} 

function showGameMsg(message) {
    document.getElementById("game-msg").innerHTML = message;
}


function nextMove(cell) {
    if (varEmpty != null){
    showGameMsg(document.turn.bold().big() + " Won !".bold().big().italics());
    } else if (cell.innerHTML == "") {
    cell.innerHTML = document.turn;
    switchPlayer();
    } 
}

function switchPlayer() {
    if (checkWinner(document.turn)) {
        showGameMsg(document.turn.bold().big() + " Won !".bold().big().italics());
        varEmpty = document.turn; 
    } else if (document.turn == "X") {
        document.turn = "0";
        showGameMsg( document.turn.bold().big() + " has to move!");
    } else if (document.turn = "X"){
        showGameMsg( document.turn.bold().big() + " has to move!"); 
    } 
} 


//This function change the message, see swicthPlayer function

function checkWinner(move) { 
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

function startOver () {
     location.reload();
}

function clearBoard(number) {
    document.getElementById("c" + number).innerHTML = "";
}

