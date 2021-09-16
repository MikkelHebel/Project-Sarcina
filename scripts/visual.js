// Paint a small filled circle on the canvas for each key (location) in coords (randomly placed)
function drawLocations() {
  for (let k in coords) {
    ctx.beginPath();
    let x = coords[k].x;
    let y = coords[k].y;
    ctx.arc(x, y, 10, 0, 6.3);
    ctx.fillStyle = "black";
    ctx.fillText(coords[k].Name, x + 15, y - 20);
    ctx.fill();
  }
}

function drawRoads() {
  for (let k in roads) {
    let x1 = roads[k].x1;
    let y1 = roads[k].y1;
    let x2 = roads[k].x2;
    let y2 = roads[k].y2;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000';
    ctx.moveTo(roads[k].x1, roads[k].y1);
    ctx.lineTo(roads[k].x2, roads[k].y2);
    ctx.stroke();
  }
}

function drawRobot() {
  ctx.beginPath();
  let x = 900;
  let y = 150;
  ctx.arc(x, y, 3.5, 0, 6.3);
  ctx.fillStyle = "red";
  ctx.fill();
}
