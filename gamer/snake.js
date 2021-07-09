// console.log('zenith')


const canvas = document.getElementById('game')
const zenith = canvas.getContext('2d')


//the main variables that are to be used
let speed = 5;
let headX = 10;
let headY = 10;
let tileCount = 20
let tileSize = canvas.width/ tileCount -2;
let xVelicity = 0;
let yVelocity = 0;


//the main functions of the game
function drawGame(){
    takeScreen();
    changeSnakePosition();
    drawSnake();
    setTimeout(drawGame, 1000 /speed)
}


//putting the color in the canvas
function takeScreen(){
    zenith.fillStyle = 'black';
    zenith.fillRect(0,0, canvas.clientWidth, canvas.height)
}

//draw the snake with its different properties
function drawSnake(){
    zenith.fillStyle = 'yellow'
    zenith.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize )
}

//changing the snake position in both the x direction  and the y direction
function changeSnakePosition(){
    headX = headX + xVelicity;
    headY = headY + yVelocity;
}

//the different arrow key keyboard function
document.body.addEventListener('keydown', keyDown);
function keyDown(event){
    //up arrow key
    if (event.keyCode == 38 || event.keyCode == 87) {
        //87 is w
        if (yVelocity == 1) return;
        yVelocity = -1;
        xvelocity = 0;
        console
      }
    
      //down
      if (event.keyCode == 40 || event.keyCode == 83) {
        // 83 is s
        if (yVelocity == -1)
         return;
        yVelocity = 1;
        xVelicity = 0;
      }
    
      //left
      if (event.keyCode == 37 || event.keyCode == 65) {
        // 65 is a
        if (xVelicity == 1) return;
        yVelocity = 0;
        xVelicity = -1;
      }
    
      //right
      if (event.keyCode == 39 || event.keyCode == 68) {
        //68 is d
        if (xVelicity == -1) return;
        yVelocity = 0;
        xVelicity = 1;
      }
}
drawGame();
