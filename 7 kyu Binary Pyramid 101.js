function BinaryPyramid(m, n) {
    let sm = 0;
    for (let i = m; i <= n; i++)
        sm += parseInt(i.toString(2));
    return sm.toString(2);
}