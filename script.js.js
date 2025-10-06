const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

yesBtn.addEventListener('click', () => {
  response.textContent = "Ak tr so E srr 💖😍";
});

// Move the "No" button when hovered
noBtn.addEventListener('mouseover', () => {
  const container = document.querySelector('.container');

  const containerRect = container.getBoundingClientRect();
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = container.offsetWidth - btnWidth;
  const maxY = container.offsetHeight - btnHeight;

  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${randX}px`;
  noBtn.style.top = `${randY}px`;
});
