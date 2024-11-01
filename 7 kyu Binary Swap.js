function binarySwap(input) {
    if (input == 0) return 1
    if (input == 1) return 0
    if (Array.isArray(input)) return input.map(el => binarySwap(el))
    return binarySwap(input())
}
