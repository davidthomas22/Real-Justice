function initializeVideoPlayerControls() {
   var video = document.getElementById("video_player");
   
   function playVideo(evt) {

    button = evt.target;
    if (video.paused) {
        video.play();
        button.textContent = "Pause"; 
    }
    else {
        video.pause();
        button.textContent = "Play";
    }
   }
}

document.getElementById("playButton").addEventListener("click", playVideo, false);
