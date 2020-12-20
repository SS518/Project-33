var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score = 0;
//var ,fakeline2,fakeline3,fakeline4,fakeline5,fakeline6,fakeline7,fakeline8,fakeline9,fakeline10;
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
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  textSize(32)
  text("300",15,525);
  text("500",95,525);
  text("100",175,525);
  text("200",255,525);
  text("300",335,525);
  text("300",415,525);
  text("200",495,525);
  text("100",575,525);
  text("500",655,525);
  text("300",735,525);

  text(score,20,50)

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%50===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }

   if(particles.Y < 355){
     score = score + 300
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {

     
     divisions[k].display();
   }

 //  drawSprite()
}