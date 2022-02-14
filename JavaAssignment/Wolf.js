let wolf;
let moon;
let y = 0;

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
  y+=-10;
  if(y<-540){
    y+=10;
  }
  fullmoon();
  pop();
}

function fullmoon() {
  image(moon, width/2, 540, 100, 100);
}
