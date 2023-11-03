function logicalCalc(array, op) {
    if (op === 'AND') {
        return !array.includes(false);
    }

    if (op === 'OR') {
        return array.includes(true);
    }

    return array.reduce((a, b) => !!(a ^ b));
}