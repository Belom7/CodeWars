function numberJoy(n) {
    const sumNum = n.toString().split('').reduce((a,b) => (+a)+(+b))
    const sumNumReverse = sumNum.toString().split('').reverse().join('')

    return sumNum * sumNumReverse === n

}