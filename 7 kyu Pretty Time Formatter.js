function f(n) {
    if (n < 10)
        return `0${n}`;
    else
        return `${n}`;
}

function prettyTimeFormat(seconds) {
    seconds = Math.floor(seconds);
    const s = seconds % 60;
    seconds = Math.floor(seconds / 60);
    const m = seconds % 60;
    seconds = Math.floor(seconds / 60);
    const h = seconds;
    return `${f(h)}:${f(m)}:${f(s)}`.replace(/^(00:)+/g, '').replace(/^0+(?=([^0]|0$))/, '');
}