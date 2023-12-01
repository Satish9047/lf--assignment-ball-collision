
//generate random number
function getRandomNumber(min, max){
    return min + Math.random()*(max - min);

}

//fuction for calculating th distance between two different balls
function calculateDistance(x1, y1, x2, y2){
    const xDistance = x2 - x1;
    const yDistance = y2 - y1;
    
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}