var dog,happydog
var database, foodS, foodStock 

function preload()
{
  regDog=loadImage("Dog.png")
  happyDog=loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,20,30)
  dog.addImage(regDog)
  dog.scale=0.1
  foodStock=database.ref('food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46, 139, 87)
  
if (keyWentDown(UP_ARROW)) {
  foodS=foodS-1
  writeStock(foodS)
  dog.addImage(happyDog)
  
}
drawSprites();
  //add styles here
}
function readStock(data){
  foodS=data.val()
}
function writeStock(x) {
  database.ref('/').update({
    food:x
  })
  
}




