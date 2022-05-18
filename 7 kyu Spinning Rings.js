function spinningRings(innerMax, outerMax) {
    let [i, im, om] = [0, 0, 0]
    while (++i) {
        if (--im < 0) im = innerMax;
        if (++om > outerMax) om = 0;
        if (im == om) return i;
    }
};