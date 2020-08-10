var bullet,wall;
var speed,weigh;
var thickness;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,20,10);
  bullet.shapeColor="white"
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="grey"
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(lBullet,lwall){
  bulletRightEdge=lBullet.x+lBullet.width;
  wallleftEdge=lwall.x;
  if(bulletRightEdge>=wallleftEdge){
    return true
  }
  return false ;
}