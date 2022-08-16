function squareDigits(num){
    return Number(num.toString().split('').map(m=>m*m).join(''))
}
