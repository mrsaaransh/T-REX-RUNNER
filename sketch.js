var trex, trex_running;
var ground, ground_move;
var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;


function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  ground_move = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  trex = createSprite(50, 180, 10, 10);
  trex.addAnimation("trexrun", trex_running);
  trex.scale = 0.5;
  ground = createSprite(200, 180, 400, 10);
  ground.addImage("groundmove", ground_move);
  ground.velocityX = -5;
  ground.x = ground.width / 2;
  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
}

function draw() {
  background(180);
  if (ground.x < 0) {
    ground.x = ground.width / 2
  }
  if (keyDown("space")&&trex.collide (invisibleGround)) {
    trex.velocityY = -10
  }
  trex.velocityY = trex.velocityY + 0.8

  trex.collide(invisibleGround);

  spawnClouds();
  spawnObstacles();


  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600, 120, 40, 10);

    cloud.y = Math.round(random(80, 120));
    cloud.addImage("cloud", cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;

    //assign lifetime to the variable
    cloud.lifetime = 200;

    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }

}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600, 165, 10, 40);
    obstacle.velocityX = -6;

    //generate random obstacles
    var rand = Math.round(random(1, 6));

    switch (rand) {
      case 1:  
        obstacle.addImage(obstacle1);
        break;
      case 2:
        obstacle.addImage(obstacle2);
        break;
      case 3:
        obstacle.addImage(obstacle3);
        break;
      case 4:
        obstacle.addImage(obstacle4);
        break;
      case 5:
        obstacle.addImage(obstacle5);
        break;
      case 6:
        obstacle.addImage(obstacle6);
        break;
      default:
        break;

    }

    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 200;
  }
}