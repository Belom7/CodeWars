function toString(time) {
    let t = Math.floor(time / 1000);
    const second = t % 60;
    t = (t - second) / 60;
    const minute = t % 60;
    const hour = (t - minute) / 60;
    const result = hour ? `${hour}:${minute}:${second}` : `${minute}:${second}`;
    return result.replace(/:(\d)\b/g, ':0$1');
}