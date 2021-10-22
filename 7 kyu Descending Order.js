function descendingOrder(n) {
    if (Number.isInteger(n) == false || n < 0) {
        console.log('число не является положительным или целым')
    } else if (Number.isInteger(n) > 0) {
        console.log('щас будет магия!')

        let arr = String(n).split('')
        return Number(arr.sort().reverse().join(''))
    }
}