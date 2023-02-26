function numbersGrouping(a) {
    return new Set(a.map(n=>Math.ceil(n/10000))).size+a.length;
}