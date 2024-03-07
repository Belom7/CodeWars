function towerCombination(n) {
    if (typeof n !== 'bigint') n = BigInt(n);
    return n === 1n ? n : n * towerCombination(n - 1n);
}