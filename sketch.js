var movingRect, fixedRect



function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite (200,250,100,80);
}

function draw() {
  background("black"); 
  
  movingRect.y=mouseY;
  movingRect.x=mouseX;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }

  else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue"; 
  }

  
 
  drawSprites();
}