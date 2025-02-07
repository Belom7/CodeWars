function ppap(ar1,ar2) {
    let [a,b,c,d] = [...ar1,...ar2].map(e=>e[0].toUpperCase()+e.slice(1).toLowerCase())
    let e = a==c || a==d ? a : b
    return `${e}-${e==d?c:d}-${e==b?a:b}-${e}`
}