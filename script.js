async function drawShots() {
  const response = await fetch('data/shots.json');
  const shots = await response.json();

  const canvas = document.getElementById('court');
  const ctx = canvas.getContext('2d');

  shots.forEach(shot => {
    const { x, y, made } = shot;

    // Scale x/y to match canvas size
    const scaledX = x * 10;
    const scaledY = y * 10;

    ctx.beginPath();
    ctx.arc(scaledX, scaledY, 6, 0, Math.PI * 2);
    ctx.fillStyle = made ? 'green' : 'red';
    ctx.fill();
    ctx.stroke();
  });
}

drawShots();
