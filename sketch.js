//Create variables here
var database;
var dog;
var dogImg;
var happydog;
var foodS;
var foodStock;

function preload()
{
  //load images here
 dogImg = loadImage("images/dogImg.png");
 happydog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();

	createCanvas(500, 500);
  dog= createSprite(250,250);
  dog.addImage(dogImg);

dog.scale=0.3;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background=(46, 139, 87);

if(keyWentDown(UP_ARROW))
{
  writeStock(foodS);
  dog.addImage(happydog);
}
  drawSprites();
 
textSize(20)
fill("blue");
text("Note:Press UP_ARROW Key To Feed Bailey !");
text("Food: "+foodS,140,50);
  //add styles here
  function readStock(data)
  {
    foodS=data.val();
  }
  function writeStock(x){
    if(x<=0)
  {
       x=0;
  }
    else
  {
      x = x -1 ;
  }
    database.ref('/'). update 
 ( {
    Food:x
  })
  
  }
}



