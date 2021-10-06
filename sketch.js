var bg, bgImg;
var spaceship, spaceshipImg;

function preload (){
    bgImg  = loadImage("space.png");
    spaceshipImg = loadImage("spaceship.png");
}

function setup(){
    createCanvas(700,600);
    bg = createSprite(600,300);
    bg.addImage(bgImg);
    bg.scale = 2;
    bg.velocityX = -3;


    spaceship = createSprite(50,550);
    spaceship.addImage(spaceshipImg);
    spaceship.scale = 0.5;
    
}

function draw(){
    background(0);

    if (bg.x <50){
        bg.x = bg.width/2;
      }

      if(keyDown("UP_ARROW")){
        spaceship.y = spaceship.y - 4;
      
      }
      if(keyDown("DOWN_ARROW")){
        spaceship.y = spaceship.y + 4;
      
      }
      
        
      if(keyDown("LEFT_ARROW")){
        spaceship.x = spaceship.x - 4;
       
      }
      if(keyDown("RIGHT_ARROW")){
        spaceship.x = spaceship.x + 4;
      
      }
      drawSprites();
}