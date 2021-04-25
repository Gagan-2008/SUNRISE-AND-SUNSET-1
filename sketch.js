const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var min;
var sec;
var bg ;

function preload() {
     //getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg();
}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    {
         background(backgroundImg);
        textSize(20);
        fill("#1C0303");
        strokeWeight(5);
        text("Time:" + hour +":" + min +":" + sec, 50, 50);
    
    }
    noStroke();
 
    Engine.update(engine);

    // write code to display time in correct format here
    

}

async function getBackgroundImg(){

var response;
var responseJSON;
var datetime;


    // write code to fetch time from API
    response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  
    //change the data in JSON format
    responseJSON= await response.json();
    // write code slice the datetime
    datetime=responseJSON.datetime;
    hour = datetime.slice(11,13);
    min = datetime.slice(14,16);
    sec = datetime.slice(17,19);
  
    // add conditions to change the background images from sunrise to sunset
    if (hour >= 4 && hour <6)
    {
        bg="sunrise1.png";
    }
    else if (hour >= 6 && hour <8 )
    {
        bg="sunrise2.png";          
    }
    else if (hour >= 8 && hour <10 )
    {
        bg="sunrise3.png";
    }
    else if (hour >= 10 && hour <12)
    {
        bg="sunrise4.png";
    }
    else if (hour >= 12 && hour <14 )
    {
        bg="sunrise5.png";
    }
    else if (hour >= 14 && hour <16)
    {
        bg="sunrise6.png";
    }
    else if (hour >= 16 && hour <18 )
    {
        bg="sunset7.png";
    }
    else if (hour >= 18 && hour <20 )
    {
        bg="sunset8.png";
    }
    else if (hour >=20 && hour <22 )
    {
        bg="sunset9.png";
    }
    else if (hour >= 22 && hour <0 )
    { 
        bg="sunset10.png";
    }
    else if (hour >= 0 && hour <2)
    {
        bg="sunset11.png";
    }
    else
    {
        bg="sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
