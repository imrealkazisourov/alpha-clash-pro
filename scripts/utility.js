// hiding screen function 
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
// showing the element by id
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// random alphabet generating function 
function getRandAlphabet(){
    //creating alphabet array
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get a random index between 0-25 because english alphabets are 26 and index starts from 0

    const randomNumber = Math.random()*25;
    const randomIndex = Math.round(randomNumber);
    const alphabet = alphabets[randomIndex];
    // console.log(randomIndex, alphabet);
    return alphabet;
    
}

function addKeyHighlightColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-yellow-400');
}
function removeKeyHighlightColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-yellow-400');
}