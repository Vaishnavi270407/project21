//Global Variable
var bullet, wall;
var speed, weight;
var damage, thickness;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 30, 25);
  wall = createSprite(1100, 200, 10, 100);
  wall.shapeColor = color(80,80,80);
  bullet.shapeColor = color(255,255,255)
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  wall.height = canvas.height/2;
  wall.width = thickness;
  //Setting the velocity of the car

}

function draw() {
  background(200,200,200);  
  if(keyDown("Space")){
    bullet.shapeColor = color(255,255,255);
    bullet.x = 50;
    bullet.y = 200;
    bullet.velocityX = speed;
    wall.shapeColor = color(80,80,80);
  }
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    damage = (0.5 * speed * speed * weight)/ (thickness * thickness * thickness);
    if (damage < 10){
      wall.shapeColor = color(0,255,0);
    }
    if (damage > 10){
      wall.shapeColor = color(255,0,0);
    }



  }

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;

}