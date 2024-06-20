// Game Continue Function 
function continueGame() {
    //generating random alphabet is first step 
    const alphabet = getRandAlphabet();
    console.log(alphabet);

    //set randomly generated alphabet to the screen (show it)
    
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    
}

// home screen to game screen function 
function playNow() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}