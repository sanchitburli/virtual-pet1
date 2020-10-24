var dog,happyDog,database,foodS,foodStock;

function preload(){
  sadDog = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250)
  dog.scale=0.2;
  dog.addImage(sadDog);
  database = firebase.database();
  foodStock = database.ref('Food')
  foodStock.on("value",readStock);
}


function draw() { 
  background(46,139,87) 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogImage)
  }

  drawSprites();
  textSize(15)
  fill("red")
  stroke("black")
  text("food remaining:"+foodS,220,180);
  text("press up arrow key to feed drago milk",150,30);

}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  if(x<=0){
   x = 0;
}else{
  x=x-1;
}
  database.ref('/').update({
    Food:x
  })
}


