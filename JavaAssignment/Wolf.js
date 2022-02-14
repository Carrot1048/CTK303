let wolf;
let moon;
let y = 540;

function setup() {
  let cnv = createCanvas(960, 590);
  cnv.id('Cover');
  background(29, 44, 59);
  imageMode(CENTER);
  wolf = loadImage("wolf.png");
  moon = loadImage("moon.jpg");
}

function draw() {
  image(wolf, width/2, 540, 108, 100);
  push();
  translate(0, y);
  image(moon, width/2, 540, 100, 100);
  y+=-10;
  if(y<50){
    y+=10;
  }
  pop();
}
