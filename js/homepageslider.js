document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.our-projects .project-container .project-slider-section .project-slider');
    const cards = slider.querySelectorAll('.project-card');
    const cardCount = Array.from(cards).filter(card => !card.classList.contains('clone')).length;
    const buttons = document.querySelectorAll('.our-projects .project-container .project-slider-section .project-slider-buttons .proj-button');
    const indicator = document.querySelector('.our-projects .project-container .project-slider-section .project-slider-buttons span');
  
    const cardWidth = cards[0].offsetWidth;
    const gap = 40; // gap in CSS
    const scrollAmount = cardWidth + gap;
  
    // Clone first N and last N cards
    const cloneCount = 2;
    for (let i = 0; i < cloneCount; i++) {
      const firstClone = cards[i].cloneNode(true);
      const lastClone = cards[cardCount - 1 - i].cloneNode(true);
      firstClone.classList.add('clone');
      lastClone.classList.add('clone');
      slider.appendChild(firstClone);
      slider.insertBefore(lastClone, slider.firstChild);
    }
  
    // Total scrollable items after cloning
    const totalItems = slider.querySelectorAll('.project-card').length;
  
    // Set initial scroll to the first real card
    let position = cloneCount;
    slider.scrollLeft = scrollAmount * position;
  
    // Update indicator
    function updateIndicator() {
      const visibleIndex = ((position - cloneCount + cardCount) % cardCount) + 1;
      indicator.textContent = `${visibleIndex} of ${cardCount}`;
    }
  
    // Smooth scroll + infinite loop logic
    function scrollToPosition(newPosition) {
      position = newPosition;
      slider.scrollTo({
        left: position * scrollAmount,
        behavior: 'smooth'
      });
      updateIndicator();
    }
  
    buttons[1].addEventListener('click', () => {
      position++;
      scrollToPosition(position);
  
      // Loop to start if at end clones
      if (position >= totalItems - cloneCount) {
        setTimeout(() => {
          position = cloneCount;
          slider.scrollLeft = position * scrollAmount;
        }, 300); // Wait for smooth scroll to finish
      }
    });
  
    buttons[0].addEventListener('click', () => {
      position--;
      scrollToPosition(position);
  
      // Loop to end if at start clones
      if (position < cloneCount) {
        setTimeout(() => {
          position = totalItems - cloneCount - 1;
          slider.scrollLeft = position * scrollAmount;
        }, 300);
      }
    });
  
    updateIndicator();
  });
  