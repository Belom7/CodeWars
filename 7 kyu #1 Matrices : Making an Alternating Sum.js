function scoreMatrix(matrix) {
    let out = matrix.map( (el, i) => i % 2 ? el.map(e=> -e) : el );
    out = out.map( el => el.map((e, i) => i % 2 ? -e : e) );
    return out.reduce((a, b) => a.concat(b)).reduce((a, b) => a + b);
}