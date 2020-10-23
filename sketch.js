
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  
    ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
    ground.x = ground.width /2;
  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
    
}


function draw() {
 background("white");
  text("survivalTime:"+survivalTime,300,40)
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  survivalTime = survivalTime+Math.round(getFrameRate()/60);
  
   monkey.velocityY = monkey.velocityY + 0.8
 monkey.collide(ground);
  
  
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
  drawSprites();
  Food();
  Obstacles();
}



function Food(){
    if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    

    
    //add each cloud to the group
      bananaGroup.add(banana);
    }
} 
  function Obstacles(){
 if (frameCount % 300 === 0){
    //generate random obstacles
    var rand = Math.round(random(380,400));
    var obstacle = createSprite(390,340,10,40);
    obstacle.velocityX = -6;
   obstacle.addImage(obstacleImage);
    
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 200;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}


