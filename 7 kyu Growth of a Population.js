function nbYear(p0, percent, aug, p, years = 0) {
    if (p0 < p) {
        return nbYear(p0 + Math.floor(p0 * percent / 100) + aug, percent, aug, p, ++years);
    }
    return years;
}