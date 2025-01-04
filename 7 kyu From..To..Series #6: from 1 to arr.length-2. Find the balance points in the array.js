function findBalance(arr) {
    const acc = [0];
    arr.forEach((x, i) => acc.push(acc[i] + x));
    const result = [];
    for (let i = 1; i < arr.length - 1; i++)
        if (Math.round(acc[i] / i) === Math.round((acc[acc.length-1] - acc[i+1]) / (arr.length-i-1)))
            result.push(i);
    return result;
}