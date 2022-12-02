function intersection (set1, set2) {
    const set3 = new Set();
    for (const elem of set1)
        if (set2.has(elem))
            set3.add(elem);
    return set3;
}

function guessTheCard(audience) {
    const cols1 = [ [1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21] ];
    const cols2 = [ [1, 2, 3, 8, 9, 15, 16], [4, 5, 10, 11, 12, 17, 18], [6, 7, 13, 14, 19, 20, 21] ];
    const cols3 = [ [1, 4, 7, 10, 13, 16, 19], [2, 5, 8, 11, 14, 17, 20], [3, 6, 9, 12, 15, 18, 21] ];

    const COLS = [cols1, cols2, cols3];
    const sets = COLS.map(
        (cols, i) => new Set(COLS[i][audience.getInput(cols)])
    );
    return intersection(intersection(sets[0], sets[1]), sets[2]).values().next().value;
}