function iccanobif(n) {
    const res = [1, 1];
    for (let i = 0; i < n - 2;)
        res.push(res[i] + res[++i])
    return res.reverse().slice(0, n);
}