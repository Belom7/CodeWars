const returnSpecifics = o => {
    let [N,F] = [[],[]]
    for(let k in o){
        if (typeof o[k] === 'number' ) N.push(o[k])
        if (typeof o[k] === 'function') F.push(k)
    }
    return N.length<1 && F.length<1 ?  ['The Object is Empty'] : [...N, ...F]
}