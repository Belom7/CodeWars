function arrayPacking(a) {
    return a.reduceRight((n, x) => (n << 8 | x) >>> 0, 0)
}