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

// project3
function scrollButtons(amount) {
  const container = document.getElementById('scrollable-buttons');
  container.scrollLeft += amount;
}


// homepageslider
 

// document.addEventListener('DOMContentLoaded', function() {
//   // Slider elementini seçirik
//   const slider = document.querySelector('.our-projects .project-container .project-slider-section .project-slider');
  
//   // Slider düymələrini seçirik: Sol düymə ilk .proj-button, sağ düymə isə son .proj-button olur.
//   const buttons = document.querySelectorAll('.our-projects .project-container .project-slider-section .project-slider-buttons .proj-button');
//   const leftBtn = buttons[0];
//   const rightBtn = buttons[buttons.length - 1];
  
//   // İndikator elementi (slider düymələri arasında göstərilir)
//   const indicator = document.querySelector('.our-projects .project-container .project-slider-section .project-slider-buttons span');

//   // Kartın eni və slider arasındakı boşluğu (CSS-də .project-card: width: 400px, gap: 40px)
//   function getScrollDistance() {
//     const card = slider.querySelector('.project-card');
//     const gap = 40; // CSS-də təyin olunmuş aradakı boşluq
//     return card ? card.offsetWidth + gap : 440; // default: 400 + 40
//   }
  
//   // Cari kartın nömrəsini və ümumi kartların sayını hesablayaraq indikatoru yeniləyirik
//   function updateIndicator() {
//     const cardWidth = getScrollDistance();
//     const currentIndex = Math.round(slider.scrollLeft / cardWidth) + 1; // 1-dən başlayırıq
//     const totalCards = slider.querySelectorAll('.project-card').length;
//     indicator.textContent = `${currentIndex} of ${totalCards}`;
//   }
  
//   // Sol düyməyə klik – slider-i sola hərəkət etdiririk
//   leftBtn.addEventListener('click', () => {
//     slider.scrollBy({ left: -getScrollDistance(), behavior: 'smooth' });
//   });
  
//   // Sağ düyməyə klik – slider-i sağa hərəkət etdiririk
//   rightBtn.addEventListener('click', () => {
//     slider.scrollBy({ left: getScrollDistance(), behavior: 'smooth' });
//   });
  
//   // Slider scroll edildikcə də indikator yenilənir
//   slider.addEventListener('scroll', updateIndicator);
  
//   // Səhifə yüklənəndə ilkin indikatoru təyin edirik
//   window.addEventListener('load', updateIndicator);
// });

