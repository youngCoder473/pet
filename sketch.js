//Create variables here

var dog;
var happyDog;
var dogSprite;
var foodStock;
var dataBase
var time
function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(800, 700);
  text("food="+foodStock,100,20);
  database = firebase.database();
 var foodref = database.ref("food")
  foodref.on("value",readFoodStock);
  dogSprite = createSprite(400,350,50,50);
  dogSprite.addImage("dog",dog);
  dog.resize(150,150);
  dogSprite.addImage("happyDog",happyDog);
}


function draw() {  
  background(46, 139, 87);
  if(keyDown(UP_ARROW)&& foodStock>0){
    foodStock = foodStock-1
    console.log(foodStock);
    dogSprite.changeImage("happyDog",happyDog);
    happyDog.resize(150,150);
  }
  text("food="+foodStock,100,20);
  drawSprites();
  //add styles here

}

function readFoodStock(data){
  foodStock = data.val();
}



