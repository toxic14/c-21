var movingRect, fixedRect;
var gameobject1;

function setup(){
  createCanvas(1200,800);

  movingRect = createSprite(200,200,50,80);
  movingRect.velocityX=5;
  fixedRect = createSprite(400,200,80,30);
  fixedRect.velocityX=-5;

  //gameobject1= createSprite(100,100,50,50);

  /*movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  gameobject1.shapeColor="blue";

  movingRect.debug= true;
  fixedRect.debug= true; */
}

function draw(){
  background("lightblue");

  //text("movingRect.x - fixedRect.x = "+(movingRect.x - fixedRect.x), 200,30);

  //movingRect.x - fixedRect.x=65;
//fixedRect.width/2 + movingRect.width/2=40+25=65

  /*movingRect.x=World.mouseX;
  movingRect.y= World.mouseY; 

if(touching(movingRect,gameobject1)){
  movingRect.shapeColor = "red";
  gameobject1.shapeColor = "red";
}

else {
  movingRect.shapeColor = "green";
  gameobject1.shapeColor = "green";
} */

bounce(movingRect,fixedRect);

  drawSprites();
}

