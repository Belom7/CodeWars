function knightVsKing(knightPosition, kingPosition) {
    var diffX = Math.abs(knightPosition[1].charCodeAt() - kingPosition[1].charCodeAt());
    var diffY = Math.abs(knightPosition[0] - kingPosition[0]);

    if (diffX <= 1 && diffY <=1) {
        return 'King'
    } else if (diffX == 1 && diffY == 2 || diffX == 2 && diffY == 1) {
        return 'Knight'
    }
    return 'None';
}