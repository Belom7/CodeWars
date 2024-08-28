var primeArray = function(n) {
    var p = [2];
    if (n<2) return [];
    if (n==2) return [2];
    for (var i=3;i<=n;i+=2) if (p.every(x=>i%x)) p.push(i);
    return p;
}