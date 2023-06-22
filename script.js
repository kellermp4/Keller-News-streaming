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

  // Remove active class from all links
  videoList.forEach(video => {
    video.classList.remove('active');
  });

  // Add active class to the clicked link
  this.classList.add('active');
}

// Attach click event listeners to video links
videoList.forEach(video => {
  video.addEventListener('click', playVideo);
});
