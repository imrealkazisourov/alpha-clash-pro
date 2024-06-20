function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log(playerPressed);
    
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(currentAlphabet, expectedAlphabet);

    //check matched or not 
    if (playerPressed === expectedAlphabet) {
        //update score
        const currentScore = getTextElementValueById('current-score');

        // new score
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);
        
        // start a new round
        removeKeyHighlightColor(expectedAlphabet);
        continueGame();
    }
    else {
        const currentLife = getTextElementValueById('current-life');

        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);


    }
}

// capture keyboard press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

// Game Continue Function 
function continueGame() {
    //generating random alphabet is first step 
    const alphabet = getRandAlphabet();
    //console.log(alphabet);

    //set randomly generated alphabet to the screen (show it)
    
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    addKeyHighlightColor(alphabet);

    
}

// home screen to game screen function 
function playNow() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}