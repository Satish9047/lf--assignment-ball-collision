let viewport;

try{
    viewport = document.getElementById("viewport");
    if(!viewport){
        throw new Error("view port not found");

    }
}catch{
    console.log(error);
    viewport = document.createElement("div");
    viewport.id = "viewport";
    viewport.classList.add("viewport");
    document.body.appendChild(viewport);

}

const ballsArray = [];

for (let i = 0; i < BALL_COUNT; i++){
    const x = getRandomNumber(0, VIEWPORT_WIDTH - BALL_WIDTH);
    const y =  getRandomeNumber(0, VIEWPORT_HEIGHT - BALL_WIDTH);
    const ball = new Ball(x, y, BALL_RADIUS);
    ballsArray.push(ball);

}

ballsArray.forEach ((ball)=> viewport.appendChild(ball.getElement()));

function render(){
    ballsArray.forEach((ball)=>{
        ball.draw();
        ball.move();

        ball.checkWallCollision(0, 0, VIEWPORT_WIDTH, ViewPORT_HEIGHT);
         ballsArray.forEach((otherBall)=>{
            if(ball === otherBall){
                return;
            }
            ball.checkBallCollision(otherBall);
         });
    })

    requestAnimationFrame(render);
}
render();