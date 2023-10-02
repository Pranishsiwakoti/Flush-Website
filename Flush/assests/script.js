alert("Fast flush it. Smells bad")

const playSoundButton = document.getElementById("playSoundButton");
const sound = document.getElementById("sound");


playSoundButton.addEventListener("click", function() {
    if (sound.paused || sound.ended) {
        sound.currentTime = 0; 
    }

    sound.play();
});
