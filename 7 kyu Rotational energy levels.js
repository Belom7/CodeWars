function rotEnergies(b, j, k) {
    return b < 0 || j > k || j % 1 !== 0 || k % 1 !== 0 ? [] : Array(k - j + 1).fill(0).map((e, i) => b * (j + i) * (j + i + 1));
}