function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-info h2');
    
    const options = {
      root: null, 
      threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const endValue = parseInt(el.dataset.value);
          let startValue = 0;
          const duration = 1000; 
          const increment = endValue / (duration / 50); 

          const interval = setInterval(() => {
            startValue += increment;
            if (startValue >= endValue) {
              clearInterval(interval);
              startValue = endValue;
            }
            el.innerText = Math.floor(startValue).toLocaleString('az-AZ');
          }, 50);

          observer.unobserve(el); 
        }
      });
    }, options);

    statNumbers.forEach(number => {
      observer.observe(number);
    });
  }

  window.addEventListener('DOMContentLoaded', animateNumbers);


// projectcard
const icons = document.querySelectorAll('.svg');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    icons.forEach(i => i.classList.remove('active')); 
    icon.classList.add('active');
  });
});


document.querySelector('.svg-one').addEventListener('click', function() {
  const container = document.querySelector('.projects-container');

  // Class-ları dəyiş
  container.classList.remove('flex-view');
  container.classList.add('grid-view');

  // Aktiv icon dəyiş
  document.querySelector('.svg-one').classList.add('active');
  document.querySelector('.svg-two').classList.remove('active');
});

document.querySelector('.svg-two').addEventListener('click', function() {
  const container = document.querySelector('.projects-container');

  // Class-ları dəyiş
  container.classList.remove('grid-view');
  container.classList.add('flex-view');

  // Aktiv icon dəyiş
  document.querySelector('.svg-two').classList.add('active');
  document.querySelector('.svg-one').classList.remove('active');
});







  // sort

function filterProjects(element) {
  // Aktiv class təmizlənir və yenisi əlavə olunur
  document.querySelectorAll('.project-type').forEach(el => el.classList.remove('active'));
  element.classList.add('active');

  // Filter dəyəri alınıb kiçik hərflərə çevrilir
  const filter = element.getAttribute('data-filter').toLowerCase().trim();
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    const projectNameElement = card.querySelector('.project-name');
    
    if (!projectNameElement) return;

    // Mətni təmizləyirik: sətirsonu, boşluqlar, case fərqi
    const projectName = projectNameElement.innerText.replace(/\s+/g, ' ').toLowerCase().trim();

    // Filtrlə uyğun gəlirsə göstər, yoxdursa gizlət
    if (filter === 'all' || projectName === filter) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

  
  