function sc(a,b,c) {
    [a,b,c] = [a,b,c].sort((x,y) => x - y);
    if (a + b == c) return `${a}+${b}=${c}`;
    if (a * b == c) return `${a}*${b}=${c}`;
    return '';
}