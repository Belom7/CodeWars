const tripleShiftian = (b, n) =>{
    for (let i = 3; i < n + 1; i++) b.push(4 * b[i - 1] - 5 * b[i - 2] + 3 * b[i - 3]);
    return b[n]
}