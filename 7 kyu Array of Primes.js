const isPrime = n => {
    if (n % 1 || n < 2) return false;
    let m = Math.sqrt(n);
    for (let i = 2; i <= m; i++) if (!(n % i)) return false;
    return true;
}
const primes = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) arr.push(i);
    }
    return arr.length ? arr : null;
}