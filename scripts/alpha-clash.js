function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    
    // stop the game if player pressed escaped button
    if (playerPressed === 'Escape'){
        gameOver();
    }
    
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

        if (updateLife === 0) {
            gameOver();
        }


    }
}

// capture keyboard press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

// Game Continue Function 
function continueGame() {
    //generating random alphabet is first step 
    const alphabet = getRandAlphabet();
    //set randomly generated alphabet to the screen (show it)
    
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    addKeyHighlightColor(alphabet);

    
}

// home screen to game screen function 
function playNow() {
    // hide other screen and showing play ground screen
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset life and score
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);


    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    //setup end score 
    const endScore = getTextElementValueById('current-score');
    setTextElementValueById('end-score', endScore);

    // clearing the alphabet Highlight color 
    const currentAlphabet = getElementTextById('current-alphabet');
    
    removeKeyHighlightColor(currentAlphabet);
}