function numberIncreasing(n) {
    return !!(n%5&&![2,4,7,12,17,22].includes(n))
}