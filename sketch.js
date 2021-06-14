var  database;
var form;
var player;
var playercount=0
function setup(){
  database = firebase.database();
  
  createCanvas(500,500);
 form=new Form();
 player=new Player();
}

function draw(){
  background("white");
  form.display();
    
    drawSprites();
  
}






