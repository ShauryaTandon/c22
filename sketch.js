const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var engine
var world
var ball
var ground
function setup(){
    var canvas = createCanvas(400,400);
    engine= Engine.create()
    world= engine.world
    ball= Bodies.circle(100,20,20,{restitution:1})
    World.add(world, ball)
    console.log(ball)
    ground= Bodies.rectangle(200,380,400,5,{isStatic:true})
    World.add(world, ground)

    
}

function draw(){
    background(0);
    Engine.update(engine)
    ellipseMode (RADIUS)
    ellipse (ball.position.x,ball.position.y,20,20)
    rectMode (CENTER)
    rect (ground.position.x,ground.position.y,400,5)
    
}