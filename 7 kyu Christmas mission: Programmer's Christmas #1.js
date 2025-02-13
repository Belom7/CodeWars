function merryChristmas(funcs) {
    funcs = funcs.reduce((a, b) => {a[b()] = b.name; return a}, {})
    return "Merry Christmas!".split('').map(c => funcs[c]).toString();
}