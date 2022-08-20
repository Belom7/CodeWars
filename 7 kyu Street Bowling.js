function ballTest(s, r) {
    let travel = 0;
    let distance = 0;
    while (true) {
        travel += s;
        if (travel >= r.length) return true;
        s -= 1 + r.slice(distance, travel).split('').filter((x) => x === 'x').length;
        distance = travel;
        if (s <= 0) return false;
    }
}