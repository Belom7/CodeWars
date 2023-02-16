function closestPairTonum (n) {
    for (let i = n - 1; i >= 1; i--) {
        for (let j = i - 1; j >= 1; j--) {
            if (Math.sqrt(i + j) % 1 === 0 && Math.sqrt(i - j) % 1 === 0) {
                return [i, j];
            }
        }
    }

    return null;
}