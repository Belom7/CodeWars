function animals(heads, legs){
    var cows = legs%2 ? -1 : legs/2-heads;
    return heads>=cows && cows>=0 ? [heads-cows, cows] : "No solutions";
}