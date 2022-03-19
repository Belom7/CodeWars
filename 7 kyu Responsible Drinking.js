function hydrate(s) {
    const num = s.split(' ').filter(f=>!isNaN(f)).map(m=>Number(m)).reduce((total, amount)=>total+amount)
    return num < 2? `${num} glass of water` : `${num} glasses of water`
}