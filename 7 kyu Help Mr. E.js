function evenator(str) {
    return str.replace(/[.,?!_]/g, '').replace(/\w+/g, w => w.length % 2 ? w + w[w.length - 1] : w);
}