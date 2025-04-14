const video = document.getElementById('bgVideo');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    toggleBtn.textContent = 'Pause arxa fon video';
  } else {
    video.pause();
    toggleBtn.textContent = 'Play arxa fon video';
  }
});



// headerfooter
function loadHTML(selector, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    });
}


// Slider
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });
}