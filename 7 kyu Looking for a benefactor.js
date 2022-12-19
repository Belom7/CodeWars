function newAvg(arr, newavg) {
    if (arr.length === 0) return newavg;
    const actualAvg = arr.reduce((a,c) => a+c, 0) / arr.length;
    const amtToAdd = Math.ceil(arr.length * (newavg - actualAvg) + newavg);
    if (amtToAdd > 0) return amtToAdd; else throw ('Expected New Average is too low');
}