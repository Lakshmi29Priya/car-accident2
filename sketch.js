var bullet,wall;
var speed,weight;
var thickness;
var damage;
function setup(){
  createCanvas(1000,1000);
 speed=random(2,100);
 weight=random(0,10);
 thickness=random(0,2);
 wall=createSprite(700,200,10,600);
bullet=createSprite(30,200,40,10);
bullet.velocityX=speed;
bullet.shapeColor="brown";
}
function draw(){
 background(0,0,0)
  if (isTouching(wall,bullet)){
    bullet.x=675;
 var damage=speed*thickness/weight;
if(damage<10){
  wall.shapeColor=("green");
} 
if(damage>10){
  wall.shapeColor=("red");
}
}
  drawSprites();
}

function isTouching(obj1,obj2){
  var bulletRightEdge=bullet.x+bullet.width;
  var wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}



