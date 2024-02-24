function isVeryEvenNumber(n) {
    while (n.toString().length > 1) {
        n = n
            .toString()
            .split("")
            .reduce((a, cv) => +cv + a, 0);
    }
    return n % 2 === 0 ? true : false;
}