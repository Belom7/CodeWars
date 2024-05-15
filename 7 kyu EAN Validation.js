function validateEAN(code) {
    for (var sum = 0, i = 0; i < 12; i++) {
        sum += code[i] * ((i & 1) ? 3 : 1)
    }

    return (10 - (sum % 10)) % 10 === +code[12]
}