function newAvg(arr, newavg) {
    let out = 0;
    if ( arr.length !== 0 ){
        let temp = newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0)
        out = Math.ceil(temp)
    } else {
        out = newavg
    }
    return out <= 0 ? error : out;
}