// JavaScript code for video streaming platform

// Get references to HTML elements
const videoPlayer = document.getElementById('video');
const videoList = document.querySelectorAll('#video-list ul li a');

// Function to play selected video
function playVideo(event) {
  event.preventDefault();
  const videoUrl = this.getAttribute('href');
  videoPlayer.src = videoUrl;
  videoPlayer.play();
}

// Attach click event listeners to video links
videoList.forEach(video => {
  video.addEventListener('click', playVideo);
});
