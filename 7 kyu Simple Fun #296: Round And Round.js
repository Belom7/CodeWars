function roundAndRound(n, a, b) {
    return (a+b%n+n)%n||n
}