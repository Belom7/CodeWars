function mergeArrays(a, b) {
    const newArr = a.concat(b).sort((a,b) => a-b)
    return newArr.filter((el, i) => newArr.indexOf(el) === i )
}