
window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("logo-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  
  ctx.shadowColor = "#007BFF";
  ctx.shadowBlur = 20;

  
  ctx.beginPath();
  ctx.arc(25, 25, 25, 0, 2 * Math.PI);
  ctx.fillStyle = "#007BFF";
  ctx.fill();

  
  ctx.shadowBlur = 0;

 
  ctx.fillStyle = "white";
  ctx.font = "bold 24px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("B", 25, 25);
});
