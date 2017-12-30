var capture;

function setup() {
  createCanvas(1000, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
  
  rSlider = createSlider(0, 100, 38);
  rSlider.position(20, 20);

  posSlider = createSlider(0, 100, 38);
  posSlider.position(20, 50);
}

function draw() {
  background(255);
  push()
  translate(capture.width * posSlider.value()/100, 0);
  scale(-1,1);
  image(capture, 0, 0, 320, 240);
  pop()
  filter('INVERT');
  
  push()
  translate(capture.width, 0);
  scale(-1,1);
  image(capture, -320, 0, 320, 240);
  pop()

  filter('THRESHOLD', rSlider.value()/100);
  push()
  translate(capture.width, 0);
  scale(-1,1);
  image(capture, -640, 0, 320, 240);
  pop()
  
  //filter('INVERT');
  
}
