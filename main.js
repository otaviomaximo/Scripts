document.addEventListener("DOMContentLoaded", function () {
  // Get the line element
  const line = document.querySelector('#speed .cls-2');
  const borderCircle = document.querySelector('#speed .cls-3');

  function animateLine(timestamp) {
      const frequency = 0.002;
      const amplitude = 10;
      const colorOffset = -53; // Adjust the color offset

      const newX1 = 60 + amplitude * Math.sin(frequency * timestamp);
      line.setAttribute('x1', newX1);

      // Calculate the hue for the color transition
      const hue = Math.floor((newX1 / amplitude) * colorOffset) % 360;
      
      // Set the new stroke color
      borderCircle.style.stroke = `hsl(${hue}, 100%, 50%)`;

      requestAnimationFrame(animateLine);
  }

  requestAnimationFrame(animateLine);
});