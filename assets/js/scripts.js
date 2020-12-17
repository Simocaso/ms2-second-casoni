function firstMove() {
    document.turn = "a";

    showGameMsg( document.turn + " starts");
}

function showGameMsg(message) {
    document.getElementById("game-msg").innerText = message;
}

