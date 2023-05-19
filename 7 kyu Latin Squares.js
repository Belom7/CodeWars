function makeLatinSquare(n) {
    const range = [...Array(n).keys()].map(x=> x + 1);
    return range.map(y=> range.map(x=> (y + x) % n + 1));
}