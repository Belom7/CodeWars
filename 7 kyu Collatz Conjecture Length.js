function collatz(n) {
    var l = 1;
    while(n > 1) {
        l++
        n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    }
    return l;
}