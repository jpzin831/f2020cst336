var randomNumber = Math.floor(Math.random() * 99) + 1;

var numberOfGuess = $("#guesses");
var lastResult = $("#lastResult");
var lowOrHigh = $("#lowOrHigh");
var guessSubmit = $("#guessSubmit");
var guessField = $("#guessField");
var guessCount = 1;
var resetButton = $("#resetButton");
var winCount = $("#wins");
var lossCount = $("#losses");
var wins = 0;
var losses = 0;

guessField.focus();
resetButton.hide();

function checkGuess() {
    var userGuess = Number(guessField.val());
    
    if(userGuess > 99 || userGuess < 0 || !$.isNumeric(userGuess)){
        lastResult.html('Error: Number must be between 0 and 99');
        lastResult.css('background-color', 'red');
        guessField.val('');
        guessField.focus();
        return;
    }
    
    if(guessCount == 1){
        numberOfGuess.html("Previos Guesses: ");
    }
    
    if(userGuess == randomNumber){
        lastResult.html("Congratulations, you got it right!");
        lastResult.css("background-color", "green");
        lowOrHigh.html('');
        wins++;
        setGameOver();
    }else if(guessCount == 7){
        lastResult.html("Sorry, you lost");
        losses++;
        setGameOver();
    }else{
        lastResult.html("Wrong");
        lastResult.css("background-color", "red");
        if(userGuess < randomNumber){
            lowOrHigh.html("Last guess was too low");
        }else{
            lowOrHigh.html("Last guess was too high");
        }
        guessField.val('');
    }
    guessCount++;
    guessField.focus();
    numberOfGuess.append(userGuess, " ");
}

function setGameOver(){
    winCount.html("Wins: " + wins);
    lossCount.html("Losses: " + losses);
    guessField.prop("disabled", true);
    guessSubmit.prop("disabled", true);
    resetButton.show();
    resetButton.on("click", resetGame);
}

function resetGame(){
    guessCount = 1;
    var resetParas = $(".resultParas").find('p');
    for(var i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = '';
    }
    resetButton.hide();
    guessField.prop("disabled", false);
    guessSubmit.prop("disabled", false);
    guessField.val('');
    guessField.focus();
    lastResult.css('background-color', 'white');
    randomNumber = Math.floor(Math.random() * 99) + 1;
}

guessSubmit.on("click", checkGuess)