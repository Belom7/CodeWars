function makeNegative(num) {
    let b
    num > 0 ? b = num * (-1) : num == 0 ? b = 0 : b = num * (1)
    return b
}