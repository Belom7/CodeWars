const { pow, sqrt } = Math;
Object.assign(Number.prototype, {
    add(n) { return (this + n); },
    sub(n) { return (this - n); },
    mul(n) { return (this * n); },
    div(n) { return (this / n); },
    pow(n) { return pow(this, n); },
    sqr( ) { return sqrt(this); },
});