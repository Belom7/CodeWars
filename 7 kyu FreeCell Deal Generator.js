function deal(n) {
    let deck = [...DECK];
    for (let k = 51; k > 0; k--) {
        n = n * 214013 + 2531011 & 0x7FFFFFFF;
        const i = (n >> 16) % (k + 1);
        if (i !== k) [deck[i], deck[k]] = [deck[k], deck[i]];
    }
    return deck.reverse();
}