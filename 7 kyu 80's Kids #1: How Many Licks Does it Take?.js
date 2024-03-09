function totalLicks(env) {
    let a = Object.values(env);
    let b = a.reduce((add, num) => add + num , 252);
    let d = Math.max(...a);
    let c = Object.keys(env);
    let e = c[a.indexOf(d)];
    if (d > 0) {
        return `It took ${b} licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was ${e}.`;
    } else {
        return `It took ${b} licks to get to the tootsie roll center of a tootsie pop.`;
    }
}