var fixedrect;
var movingrect;
function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(400, 200, 50, 50);
 fixedrect.shapeColor ='orange'
 movingrect = createSprite(300,200,50,50)
 movingrect.shapeColor='orange'
}

function draw() {
  background('blue');
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY
  
  if (movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
    movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2  &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2
    
    
    
    ){
    //450-400===25+25
   movingrect.shapeColor= 'yellow'
   fixedrect.shapeColor='yellow' 
  }
  else{
   movingrect.shapeColor='orange'
   fixedrect.shapeColor='orange' 
  }
  drawSprites();
}