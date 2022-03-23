function swap(str){
    return str.length===0? '' : str.split('').map(m => m === m.toUpperCase()? m.toLowerCase() : m.toUpperCase()).join('')
}