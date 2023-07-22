function twoArePositive(a, b, c) {
    return [...arguments].filter(i => i > 0).length === 2;
}