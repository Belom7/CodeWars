function correct(string) {
    let a = string.split('')
    let b = ''

    for (let i = 0; i < string.length; i++) {
        if (a[i] == 5) {
            b += 'S'
        } else if (a[i] == 0) {
            b += 'O'
        } else if (a[i] == 1) {
            b += 'I'
        } else if (a[i].trim() == ' ') {
            b += 123
        } else {
            b += a[i]
        }
    }
    return b
}


console.log(correct('PAR15'))
console.log(correct('IF-RUDYARD KIPLING'))



/* S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1 */

