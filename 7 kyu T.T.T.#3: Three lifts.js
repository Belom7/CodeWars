function switchLift(status, n) {
    if (n > 1) delete status[n % 2 ? 'B' : 'A'];
    let closest = Math.min(...Object.keys(status).map(k => Math.abs(status[k]-n)));
    return closest ? Object.keys(status).filter(k => Math.abs(status[k]-n) === closest).join('') : '';
}