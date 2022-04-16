function squareOrSquareRoot(array) {
    return array.map(number => Math.sqrt(number)%1===0? Math.sqrt(number): number**2)
}