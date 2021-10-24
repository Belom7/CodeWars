function digital_root(n) {
    let result = 0;
    n.toString().split('').map(n => {
        result += Number(n)
    })
    return result > 9 ? digital_root(result) : result;
}