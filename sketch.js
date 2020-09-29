  const Engine = Matter.Engine;
  const World= Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;

  var gameState=PLAY;
  var PLAY=1;
  var END=0;
 
var ground;
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score=0;
var particle,ground;
var turn=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);



 

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
 
    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 textSize(35)
 text("500 ",10,520);
 text("500 ",90,520);
 text("500 ",170,520);
 text("500 ",250,520);
 text("100 ",330,520);
 text("100 ",410,520);
 text("100 ",490,520);
 text("200 ",570,520);
 text("200 ",650,520);
 text("200 ",730,520);

  Engine.update(engine);


  line(400,490,5,800)

  
 

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){
    
      if(particle.body.position.x<300){
        score=score+500
        particle=null
        if(count>=5)gameState="end"

      }
    }
  }
   if(frameCount%60===0){
    // particles.push(new particle(random(width/2-30, width/2+30), 10,10));
    particles.push(new Particle(random(width/2-30,width/2+30),10,10))
     //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   //drawSprites();
   //mousePressed()
   ground.display();
}

function mousePressed(){

  if(gameState!==END){
    score++
    particle=new Particle(mouseX,10,10,10)
  }
}