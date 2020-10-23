var ground, stone, stone_img,cannon ,cannon_img;

function preload(){
 stone_img=loadImage("stone.jpg")
 cannon_img=loadImage("cannon.png")
}

function setup (){
  createCanvas(displayWidth-30,displayHeight-150);
  ground=createSprite(width/2,height,width,20);
  stone = createSprite(width/3,ground.y-50,10,10);
  //stone.addImage(stone_img)

  cannon=createSprite(width/3,stone.y-50,10,10)
  //cannon.addImage(cannon_img)
  //cannon.scale=0.5

}

function draw (){
  background("lightblue");
  cannon.collide(ground);
  stone.collide(ground)
 
  drawSprites();
}