function swap (string) {
    let arr = string.split('').map(m=>m)
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        arr[i] === 'a'|| arr[i] === 'e' || arr[i] === 'i'|| arr[i] === 'o'|| arr[i] === 'u'? newArr.push(arr[i].toUpperCase()): newArr.push(arr[i])
    }
    return newArr.join('')
}