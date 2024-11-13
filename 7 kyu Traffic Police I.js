const speedError = (est, act, [[a1, t1],[a2, t2]]) => {
    if (a1 <= 0 || a2 <= 0) throw new Error('Error');
    const d = (a, w) => Math.sqrt(Math.abs(Math.pow(a, 2) - w * w)),
        time = Math.abs(t1 - t2),
        speed = (d, t) => d / t * 3.6,
        distEst = d(Math.max(a1, a2), est) - d(Math.min(a1, a2), est),
        distAct = d(Math.max(a1, a2), act) - d(Math.min(a1, a2), act);
    return [+(speed(distEst, time)).toFixed(1), +(speed(distAct, time)).toFixed(1)]
}