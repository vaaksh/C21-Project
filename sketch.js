
function setup() {
  createCanvas(1300,400);
  var thickness = random(22, 83);
  var speed = random(223, 321);
  var weight = (30, 52);
  var bullet = createSprite(0, 200, 25, 2);
  var wall = createSprite(1200, 200, width, 100);
  var damage;
  wall.shapeColor = rgb(80, 80, 80);
  bullet.shapeColor = rgb(0, 0, 0);
}
function isTouching(object1,object2){
  if(object1.x - object2.x < object1.width / 2 + object2.width / 2 && object2.x - object1.x < object1.width / 2 + object2.width
     && object2.y - object2.y < object1.height / 2 + object2. height && object2. y - object1.y < object1.height + object2.height)
  {
    return true;
  }
  else{
    return false;
  }
}
var hasCollided = function(){
  speed = 0;
  damage = 0.5 * weight * (speed ^ 2) / (thickness ^ 3);
  if(damage > 10){
    wall.shapeColor = "red";
  }
  else{
    wall.shapeColor = "green";
  }
}
function draw() {
  background(255,255,255);
  bullet.x +=speed;
  if(isTouching(bullet, wall)){
    hasCollided();
  }
  drawSprites();
}
