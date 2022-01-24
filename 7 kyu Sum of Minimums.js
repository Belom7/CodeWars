function sumOfMinimums(arr) {
    let finishNum = 0
    arr.map(m=> finishNum += Math.min(...m))
    return finishNum
}