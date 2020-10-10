var cake , cakeImage;
function preload(){
  cakeImage=loadImage("RedVelvetCakeUvU.jpg");
}
function setup() {
  createCanvas(600,600);
  cake = createSprite(300, 300, 400, 400);
  cake.addImage(cakeImage)
}

function draw() {
  background(0);  

  drawSprites();
}
 