function isPythagoreanTriple(integers) {
    let ordered = integers.sort((a, b) => a - b);
    return ordered[0] ** 2 + ordered[1] ** 2 === ordered[2] ** 2;
}