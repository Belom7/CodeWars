const countSheep = function (num){
    let arr = []
    for(let i = 1; i<= num; i++){
        i===0? arr.push('') : arr.push(`${i} sheep...`)
    }
    return arr.join('')
}