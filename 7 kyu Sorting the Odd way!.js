function sortItOut(array){
    return array.filter(a => Math.floor(a) % 2 !== 0).sort((a,b) => a - b)
        .concat(array.filter(a => Math.floor(a) % 2 === 0).sort((a,b) => b - a))
}