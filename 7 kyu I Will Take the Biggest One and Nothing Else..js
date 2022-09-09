function maxIntChain(n) {
    if(n < 5) return -1
    return Math.ceil((n / 2) ** 2) - 1
}