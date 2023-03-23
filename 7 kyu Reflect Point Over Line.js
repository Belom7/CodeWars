function reflect([x, y], [m, b]) {
    const a = 2 * (y - b - x * m) / (m * m + 1);
    return [x + m * a, y - a];
}