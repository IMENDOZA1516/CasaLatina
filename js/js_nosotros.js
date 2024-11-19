document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(function(card) {
      card.addEventListener('mouseover', function() {
        this.style.transition = 'all 1s';
        this.style.boxShadow = 'box-shadow: -1px 1px 38px 25px rgba(0,0,0,0.53);';
        this.style.cursor = 'pointer';
      });
  
      card.addEventListener('mouseout', function() {
        this.style.transition = 'all 1s';
      });
    });
  });