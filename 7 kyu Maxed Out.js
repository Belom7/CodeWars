function maxedOut(arr) {
    const result = arr.reduce((s, n) => s + Math.pow(n, 3), 0)
    return result > Number.MAX_SAFE_INTEGER ? "You've pushed me to the max!" : result
}