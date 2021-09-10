//Create variables here
var dog,happyDog;
var database;
var foodS;
var foodStoke;
var dogim;
var food=20

function preload()
{
	//load images here
  dogim=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");

}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,250,20,20);
  dog.addImage(dogim);
  dog.scale=0.4
  foodStoke=database.ref('Food');
  foodStoke.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
  food=food-1;

}
  drawSprites();
  textSize(24);
  fill("white");
  stroke("black")
  text("press UP arrow to feed the dog",150,50);
  text("food remaining:"+food,150,100)
  //add styles here

}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
database.ref('/').update({
  Food:x
})
}



