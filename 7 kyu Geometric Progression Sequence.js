function geometricSequenceElements(a, r, n){
    var res = [a];
    for (var i = 0; i < n - 1; i++) {
        res.push(res[i]*r);
    }
    return res.join(', ');
}