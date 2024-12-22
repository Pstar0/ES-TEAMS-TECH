// audio.js

// Create an audio element
const audio = new Audio("https://drive.google.com/uc?export=download&id=1aISzsRNXz0Fw2S-9ljfjlpJNjDr38e2Q");

// Set the audio to loop and autoplay
audio.loop = true;
audio.autoplay = true;

// Play the audio
audio.play();

// Optionally, you can adjust the volume
audio.volume = 0.1; // Set volume level (0.0 to 1.0)

// Handle errors if the audio fails to load
audio.onerror = function() {
  console.error("Error loading the audio file.");
};