function pairZeros(a, f) {
    return a.filter(function(n) { return (n !== 0 || (f = !f)); });
}