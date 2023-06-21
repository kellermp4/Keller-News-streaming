// JavaScript code for video streaming platform

// Get references to HTML elements
const videoPlayer = document.getElementById('video');
const videoList = document.querySelectorAll('#video-list ul li a');

// Function to play video
function playVideo(event) {
  event.preventDefault();
  const videoUrl = this.getAttribute('href');
  videoPlayer.src = videoUrl;
  videoPlayer.style.display = 'block';
  videoPlayer.play();
}

// Function to hide video player
function hideVideoPlayer() {
  videoPlayer.style.display = 'none';
}

// Attach click event listeners to video links
videoList.forEach(video => {
  video.addEventListener('click', playVideo);
});

// Add event listeners for video player events
videoPlayer.addEventListener('ended', hideVideoPlayer);
videoPlayer.addEventListener('pause', hideVideoPlayer);
