function testIt(f) {
    if (f < -459.67)
        return 'Invalid input!';
    return Math.round((f - 32) * 500 / 9) / 100;
}