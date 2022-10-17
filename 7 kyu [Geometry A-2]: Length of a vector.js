function vectorLength(vector){
    deltaX = vector[1][0] - vector[0][0];
    deltaY = vector[1][1] - vector[0][1];
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY,2))
}