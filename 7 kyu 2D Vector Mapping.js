function mapVector([x, y], [x1, y1, r1], [x2, y2, r2]) {
    return [(x - x1) * r2 / r1 + x2, (y - y1) * r2 / r1 + y2];
}