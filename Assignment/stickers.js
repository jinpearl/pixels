var myFont;
var ears; 
var heart;
var stamps = [];
var mouse; 
var i;

function setup(){
 createCanvas(1000, 800);
 
 textFont(myFont);
 textSize(30);
 
 ears = loadImage("elements/earssmall.png");
 heart = loadImage("elements/heartsmall.png");
 
 stamps[0] = loadImage("elements/earssmall.png");
 stamps[1] = loadImage("elements/heartsmall.png");
}



function preload(){
  myFont = loadFont ('elements/NeverLetGo.ttf');
}


function draw(){
  noFill;
  date(900, 100);
  
  text("happy friends", 800, 200);
  
  image(heart, 800, 300);
  image(ears, 800, 400);
 
}

function date (x, y) {
  var d = day();
  var m = month();
  var y = year();
  textFont(myFont);
  textSize(30);
  text(y + "/" + m + "/" + d, 800, 100); 
  
}

function Sticker (x, y, img) {
  this.x = x;
  this.y = y;
  this.img = img;
  
  this.display = function() {
      image(img, this.x, this.y);
  }
}

function keyTyped() {
  if (key === '0') {
    i = 0;
  } else if (key === '9') {
    i = 1;
  } 
  
}

function mousePressed () {
  imageMode(CENTER);
  image(stamps[i], mouseX, mouseY); 
}

