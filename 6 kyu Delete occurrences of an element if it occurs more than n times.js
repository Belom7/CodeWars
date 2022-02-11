const deleteNth = (a, x) => {
    let m = {};
    return a.filter( v => (m[v] = m[v]+1||1) <= x );
}