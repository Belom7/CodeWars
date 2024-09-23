function halfIt(n){
    if (typeof n!='number') return 0;
    return +(n+"").replace(/\d/g,x=>Math.round((+x)/2))
}