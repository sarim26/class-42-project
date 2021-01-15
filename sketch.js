var maxDrops=100
var umberella,umbrellaImage,dropsImage,walker,walkerImage

var drops,drops2,drops3,drops4,drops5,drops6

function preload(){
    
walkerImage=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")

}

function setup(){
   createCanvas(500,500)
walker=createSprite(300,350,10,10)
walker.addAnimation("r",walkerImage)

walker.scale=0.4
}

function draw(){
    background(0)
    
    spawnDrops1()
    spawnDrops2()
    spawnDrops3()
    spawnDrops4()
    spawnDrops5()
    spawnDrops6()
   
    drawSprites()
}   



function spawnDrops1(){

   if(frameCount%20===0){
      var drops=createSprite(250,50,10,10)
      drops.velocityY=+7
      drops.shapeColor="blue"
  }
   
}



function spawnDrops2(){

   if(frameCount%20===0){
      var drops2=createSprite(275,30,10,10)
      drops2.velocityY=+8
      drops2.shapeColor="blue"
  }
   
}



function spawnDrops3(){

   if(frameCount%20===0){
      var drops=createSprite(290,35,10,10)
      drops.velocityY=+6
      drops.shapeColor="blue"
  }
   
}


function spawnDrops4(){

   if(frameCount%20===0){
      var drops=createSprite(310,45,10,10)
      drops.velocityY=+7
      drops.shapeColor="blue"
  }
   
}



function spawnDrops5(){

   if(frameCount%20===0){
      var drops=createSprite(325,30,10,10)
      drops.velocityY=+8
      drops.shapeColor="blue"
  }
   
}



function spawnDrops6(){

   if(frameCount%20===0){
      var drops6=createSprite(340,40,10,10)
      drops6.velocityY=+6
      
      drops6.shapeColor="blue"
  }
   
}

