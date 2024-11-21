function pattern(n) {
    let res = [], line = '', i;
    for(i = n; i > 0; i--) {
        line += i;
        res.push(line);
    }
    return res.join('\n');
}