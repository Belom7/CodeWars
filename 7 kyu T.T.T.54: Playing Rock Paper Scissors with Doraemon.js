function game(nobi) {
    const result = [0, 0];
    for (const n of nobi) {
        switch (n) {
            case '[]': result[0] += 2; break;
            case '8<': result[1] += 2; break;
            case '()': result[0]++; result[1]++; break;
        }
    }
    return result;
}