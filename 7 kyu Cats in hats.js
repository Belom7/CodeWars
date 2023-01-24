function height(n) {
    let a = 0
    let b = 2000000
    for( let i = 0; i <= n; i++){
        a+=b
        b=b/2.5
    }
    return a.toFixed(3)
}