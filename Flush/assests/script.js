alert("Fast flush it. Smells bad") --- Here you can change the alert ---

Do not change!!! after these :|
---------------------------------------------------------------------------------------------------------------
const playSoundButton = document.getElementById("playSoundButton");
const sound = document.getElementById("sound");


playSoundButton.addEventListener("click", function() {
    if (sound.paused || sound.ended) {
        sound.currentTime = 0; 
    }

    sound.play();
});
