let battonCount = 24;

function setup() {
  createCanvas(800, 800);
}
function draw() {
  randomSeed(1000)
  background(161, 193,255 );

  for (let c = 0; c <= battonCount; c+=1) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    strokeWeight(1)
    fill('black')
    line(x1, y1, x2, y2);
    ellipse(x1, y1, 12, 12);
    ellipse(x2, y2, 12, 12);
    
  }
}