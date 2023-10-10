function bigToSmall(arr){
    const result = [].concat(...arr).sort(func = (a,b)=> b-a).join('>')
    return result
}