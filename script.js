document.querySelectorAll('.movie-section').forEach(section => {
  const row = section.querySelector('.movie-row');
  const buttons = section.querySelectorAll('.row-arrow');
  if (!row || buttons.length !== 2) return;

  const scrollDistance = Math.max(row.clientWidth * 0.8, 300);

  buttons[0].addEventListener('click', () => {
    row.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
  });

  buttons[1].addEventListener('click', () => {
    row.scrollBy({ left: scrollDistance, behavior: 'smooth' });
  });
});
