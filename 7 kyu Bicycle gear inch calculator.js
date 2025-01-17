function gearInchCalculator(a, b){
    let d = 26;
    return a.map(x => b.map(y => Math.round(d * x / y * 10) / 10))
}