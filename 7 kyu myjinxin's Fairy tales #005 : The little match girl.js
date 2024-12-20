function poorGirl(matches, action) {
    const actions = [... action.reduce((s, a) => s + (/Sell/.test(a) ? '$' : '1').repeat(+a.split(':')[1]), '')];
    return matches.replace(/[i!]/g, m => actions.shift() || m);
}