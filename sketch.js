var wall;
var bullet;
var damage;

var thickness;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(400, 200, 60, 30);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  bullet.density = weight;
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80)
  
  console.log(bullet.density);
  console.log(bullet.velocityX);
  console.log(wall.width);
  
  damage  = Math.round(0.5*bullet.density*bullet.velocityX*bullet.velocityX/(wall.width*wall.width*wall.width));
}

function draw() {
  background("black");
  
  if(bullet.collide(wall)){
    bullet.velocityY = 0;
  }
  textSize(30);
  fill("blue");
  text(damage,50,50);

  if(damage>10){
    wall.shapeColor = "red";
  }
  else if(damage<10){
    wall.shapeColor = "green";
  }


  drawSprites();
}
