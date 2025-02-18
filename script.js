//your JS code here. If required.
// Function to play the sound
function playSound(soundFile) {
    let audio = new Audio(`sounds/${soundFile}.mp3`);
    audio.play();
}

// Adding event listeners for each button
document.getElementById('applause').addEventListener('click', function() {
    playSound('applause'); // Assumes the file name is sound1.mp3 in the sounds folder
});

document.getElementById('boo').addEventListener('click', function() {
    playSound('boo'); // Assumes the file name is sound2.mp3 in the sounds folder
});

document.getElementById('gasp').addEventListener('click', function() {
    playSound('gasp'); // Assumes the file name is sound3.mp3 in the sounds folder
});

document.getElementById('tada').addEventListener('click', function() {
    playSound('tada'); // Assumes the file name is sound4.mp3 in the sounds folder
});

document.getElementById('victory').addEventListener('click', function() {
    playSound('victory'); // Assumes the file name is sound2.mp3 in the sounds folder
});

document.getElementById('wrong').addEventListener('click', function() {
    playSound('wrong'); // Assumes the file name is sound3.mp3 in the sounds folder
});

// Stop all sounds when the stop button is pressed
document.getElementById('stop').addEventListener('click', function() {
    let allAudio = document.querySelectorAll('audio');
    allAudio.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reset to the start
    });
});
