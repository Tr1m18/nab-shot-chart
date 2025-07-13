async function drawShots() {
  const response = await fetch('data/shots.json');
  const shots = await response.json();

  const canvas = document.getElementById('court');
  const ctx = canvas.getContext('2d');

  const COURT_WIDTH_FT = 50;
  const COURT_HEIGHT_FT = 47;

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  shots.forEach(shot => {
    const { x, y, made } = shot;

    // Scale: ft → canvas pixels
    const scaledX = (x / COURT_WIDTH_FT) * canvasWidth;
    const scaledY = canvasHeight - (y / COURT_HEIGHT_FT) * canvasHeight;

    ctx.beginPath();
    ctx.arc(scaledX, scaledY, 6, 0, Math.PI * 2);
    ctx.fillStyle = made ? 'green' : 'red';
    ctx.fill();
    ctx.stroke();
  });
}

drawShots();
