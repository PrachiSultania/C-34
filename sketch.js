const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup(){
    wbEngine = Engine.create()
    wbWorld = wbEngine.world
    createCanvas(3000,800)
    ground = new Ground(width/2, height-50, width, 40);
    ball = Bodies.circle(100, 200, 50);
    World.add(wbWorld, ball);
    console.log(ball)
}

function draw(){
    Engine.update(wbEngine)
    background(0)
    ground.display();
    fill("red")
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 50, 50);
}