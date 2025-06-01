ScrollReveal().reveal('.reveal-up', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 200,
  easing: 'ease-out',
  reset: false
});
ScrollReveal().reveal('.reveal-down', {
  origin: 'top',
  distance: '50px',
  duration: 1000,
  delay: 200,
  easing: 'ease-out',
  reset: false
});




function toggleMusic() {
  var audio = document.getElementById('backgroundMusic');
  var btn = document.getElementById('musicToggle');
  if (audio.paused) {
    audio.play();
    btn.innerText = "🔊 Musik";
  } else {
    audio.pause();
    btn.innerText = "🔇 Diam";
  }
}