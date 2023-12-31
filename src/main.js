let viewport;

try{
    //checking view port avilabile or not
    viewport = document.getElementById("viewport");
    if(!viewport){
        throw new Error("viewport not found");
    }
}catch(error){
    
    console.log(error);
    //if the viewport is not found it
    //the code will create a view port
    viewport = document.createElement("div");
    viewport.id = "viewport";
    viewport.classList.add("viewport");
    document.body.appendChild(viewport);

}

const ballsArray = [];

//creating  the ball
for (let i = 0; i < BALL_COUNT; i++){
    const x = getRandomNumber(0, VIEWPORT_WIDTH - BALL_WIDTH);
    const y =  getRandomNumber(0, VIEWPORT_HEIGHT - BALL_WIDTH);
    const ball = new Ball(x, y, BALL_RADIUS);
    ballsArray.push(ball);

}

ballsArray.forEach ((ball)=> viewport.appendChild(ball.getElement()));

// creating render function 
function render(){
    ballsArray.forEach((ball)=>{
        ball.draw();
        ball.move();

        ball.checkWallCollision(0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
         ballsArray.forEach((otherBall)=>{
            if(ball === otherBall){
                return;
            }
            ball.checkBallCollision(otherBall);
         });
    });

    requestAnimationFrame(render);
}
render();