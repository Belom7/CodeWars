function seven(m, n = 0) {
    return m < 100 ? [m, n] : seven(Math.floor(m/10) - 2 * (m % 10), ++n);
}