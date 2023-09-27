let CircleCount = 24;
let LineCount = 12;

function setup() {
  createCanvas(800, 800);
}
function draw() {
  randomSeed(1000)
  background(161, 193,255 );

  for (let c = 0; c <= CircleCount; c+=1) {
    let x1 = random(width);
    let y1 = random(height);
    strokeWeight(0)
    ellipse(x1, y1, 30, 30);
    
    for (let l = c; l <= LineCount; l+=1) {
      let x2 = (CircleCount-1)*x1;
      let y2 = (CircleCount-1)*y1;
      strokeWeight(1)
      line(x1, y1, x2, y2);
    }
  }
}