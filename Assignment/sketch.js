var video;


function setup() {
  video = createCapture(VIDEO);
  video.size(320, 240);
  createCanvas(10000, 800);
  fill(51);
  rect(0, 0, 640, 800);
 
}

function takesnap(){
  image(video, 0, 0);
}

function keyPressed() {
  if (keyCode === RETURN) {
    takesnap();
    
  }
}
function draw() {
  var w = 80;
  var h = 60;
  var x = 0;
  var y = 0;
  
  date(700, 100);
  
  text("happy friends", 700, 200);
  
  image(heart, 700, 300);
  image(ears, 700, 400);

}

