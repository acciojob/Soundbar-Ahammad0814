//your JS code here. If required.
// Function to play the sound
function playSound(soundFile) {
    let audio = new Audio(`sounds/${soundFile}.mp3`);
    audio.play();
}

// Adding event listeners for each button
document.getElementById('sound1').addEventListener('click', function() {
    playSound('sound1'); // Assumes the file name is sound1.mp3 in the sounds folder
});

document.getElementById('sound2').addEventListener('click', function() {
    playSound('sound2'); // Assumes the file name is sound2.mp3 in the sounds folder
});

document.getElementById('sound3').addEventListener('click', function() {
    playSound('sound3'); // Assumes the file name is sound3.mp3 in the sounds folder
});

document.getElementById('sound4').addEventListener('click', function() {
    playSound('sound4'); // Assumes the file name is sound4.mp3 in the sounds folder
});

// Stop all sounds when the stop button is pressed
document.getElementById('stopButton').addEventListener('click', function() {
    let allAudio = document.querySelectorAll('audio');
    allAudio.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reset to the start
    });
});
