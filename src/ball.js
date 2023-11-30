class Ball{
    constructor(x, y, r){
        this.x=x;
        this.y= y;
        this.r = r;

        this.xSpeed = getRandomNumber(-5,5);
        this.ySpeed = getRandomNumber(-5, 5);


        this.element = document.createElement("div");
        this.element.classList.add("ball");

    }

    getElement(){
        return this.element;
    }

    
    getX = ()=>this.x;

    getY = ()=>this.y;

    getR = ()=>this.r;

    setX = (x)=>(this.x=x);

    setY = (y)=>(this.y=y);

    setR = (r)=>(this.r = r);

    move = ()=>{
        this.x += this.xSpeed;
        this.y += this.ySpeed;  
     };

    draw(){
        this.element.styles.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;

    }

    checkWallCollisio = (boundaryLeft, boundaryTop, boundaryWidth, boundaryHeight)=>{
        if(this.x < boundaryLeft || this.x + Ball_Width > boundaryWidth){
            this.xSpeed *= -1;

        }

        if(this.y < boundaryTop || this.y + BALL_WIDTH > boundaryHeight){
            this.ySpeed *= -1;
        }
    }


    checkBallCollision = (ball)=>{
        const distance = calculateDistance(this.x, this.y, this.ball.y);
        const sumOfRadius = this.r + ball.r;

        if(distance < sumOfRadius){
            this.xSpeed *= -1;
            this.ySpeed *= -1;
            ball.xSpeed *= -1;
            ball.ySpeed *= -1;
        }
    }
 
}