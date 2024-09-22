function resistance(arr) {
    return Math.round(100 * (1 / (arr.reduce((s,t) => s + (1 / t.reduce((a,b)=>a+b,0)), 0)))) / 100;
}