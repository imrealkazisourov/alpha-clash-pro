function playNow() {
    //hide home section after clicking 
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    //show playground section
    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');
}