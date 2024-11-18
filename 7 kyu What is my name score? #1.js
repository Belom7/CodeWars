function nameScore(name){
    let arr = name.toUpperCase().split('')
    let score = 0
    for(a of arr)
        for(key in alpha)
            if(key.includes(a)) score += alpha[key]
    return { [name]: score }
}