function removeChar(str) {
    let arr = str.split('')
    let exit = arr.slice([1], [arr.length - 1])
    return exit.join('')
};