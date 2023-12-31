function fuelPrice(l, p) {
    return Math.round(100 * l * Math.max(p - 0.05 * ~~(l / 2), p - 0.25)) / 100;
}