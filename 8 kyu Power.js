function numberToPower(number, power){
    let n = 1
    for(let i = 1; i <= power; i++){
        n = n * number
    }
    return n
}