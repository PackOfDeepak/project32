function setup() {
  createCanvas(800,400);
  block8  = new Block(330,235,30,40);
  block9  = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  block13= new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  block16 = new Block(390,155,30,40);


}

polygon = Bodies.circle(50,200,20);
World.add(world, polygon);

slingshot = new SlingShot(this.polygon,{x:100,y:200});

function draw() {
  background(bg);
  text("Score:"+score,750,50); 
  slingshot.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
    drawSprites();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Araguaina");
  var responseJSON = await response.json()
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour>=06 && hour <= 19){
      bg = (30,30,30);
  }else{
      bg = (255,255,255);

  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);



}