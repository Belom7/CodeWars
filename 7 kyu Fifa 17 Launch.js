const fifa = (t, r) => {
    r = r.map(i => i[0] > i[2] ? 'Home' : i[0] < i[2] ? 'Away' : 'Draw');
    return "£" + Object.entries(t).map((e, i) => e[0] == r[i] ? +e[1].slice(1) : null).reduce((a, b) => a + b, 0);
}