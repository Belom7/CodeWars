function cleanedCounts(a){
    let m = 0
    return a.map(e=>m=Math.max(e,m))
}