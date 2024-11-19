function pattern(n) {

    let res = '';

    for (let i = 2; i <= n; i += 2)
        res += "\n" + `${i}`.repeat(i);

    return res.slice(1);

}