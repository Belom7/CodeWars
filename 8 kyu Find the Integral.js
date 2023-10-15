function integrate(coefficient, exponent) {
    const a = exponent+1
    const b = coefficient / a
    return `${b}x^${a}`
}