function rollDice() {
    $.get('/roll', function (data) {
        document.getElementById('diceResult').value = data.diceResult;
    });
}
