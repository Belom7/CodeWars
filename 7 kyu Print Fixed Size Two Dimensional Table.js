function buildTableText(r, c, ch) {
    let Join = (b, c='') => a => b + a.join(b) + b + c,
        s = () => '    '.split(''),
        a = s().map(s);
    a[r][c] = ch;
    return Join('---------\n')(a.map(Join('|','\n')));
}