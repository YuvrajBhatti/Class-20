var Fixedrect,movingrect;





function setup() {
  createCanvas(1000,1000);
  Fixedrect=createSprite(500, 500, 50, 50);
  Fixedrect.shapeColor="green";
  movingrect=createSprite(400,400,50,50);
  movingrect.shapeColor="green";
}

function draw() {
  background(255,255,255);  

  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
console.log(movingrect.x-Fixedrect.x)

if(movingrect.x-Fixedrect.x<=Fixedrect.width/2+movingrect.width/2
  &&
  Fixedrect.x-movingrect.x<=Fixedrect.width/2+movingrect.width/2
  &&
  movingrect.y-Fixedrect.y<=Fixedrect.height/2+movingrect.height/2
  &&
  Fixedrect.y-movingrect.y<=Fixedrect.height/2+movingrect.height/2){
movingrect.shapeColor="red";
Fixedrect.shapeColor="red";

}else{
  movingrect.shapeColor="green";
  Fixedrect.shapeColor="green"
}


  drawSprites();
}