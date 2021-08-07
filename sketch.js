var background1
var king
var queen

function preload(){
//background1=loadImage("backGround.png")

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  king=createSprite(1200, 200, 50, 50);
  queen=createSprite(displayWidth/2, displayHeight/2, 50, 50);

}

function draw() {
  background("black");  
  king.x=mouseX
  king.y=mouseY
  spawnWitches()
  drawSprites();
}
function spawnWitches(){
  if(frameCount % 60=== 0) {
    var witch = createSprite(random(200,600),random(20,1500),10,40);
    witch.velocityX=+5


  }

}