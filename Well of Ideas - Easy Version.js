function well(x){
    let good = 0
    let bad = 0
    x.filter(i=>i==='good'? good++ : bad++)
    return good > 0 && good <= 2? 'Publish!': good >= 3? 'I smell a series!' : 'Fail!'
}