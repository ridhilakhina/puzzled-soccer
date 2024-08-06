let testVariable = 28; 
let arrayOfColorChoices = ['red', 'green', 'pink', 'blue'];
let myWonderfulTint;


function origami() {
  return random(arrayOfColorChoices);
}

function setup() {
  createCanvas(400, 400);
  myWonderfulTint = origami(); 
  background(myWonderfulTint);

 
  circle(300, 330, 20);
  circle(60, 230, 203);
  circle(902, 130, 120);
  circle(120, 130, 120);
  circle(150, 230, 20);
  
  
  for(let x=30; x<390; x+=30){
    for(let y=30; y<390; y+=30){
      circle(x, y, 20);
    }
  }
}
