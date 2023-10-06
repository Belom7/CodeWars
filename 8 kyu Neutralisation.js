function neutralise(s1, s2) {
    // Here be dragons!
    const arrS1 = s1.split('')
    const arrS2 = s2.split('')
    let result = []

    for (let i = 0; i < arrS1.length; i++) {


        if (arrS1[i] === '+' && arrS2[i] === '+') {
            result.push('+')
        }
        if (arrS1[i] === '-' && arrS2[i] === '-') {
            result.push('-')
        }
        if (arrS1[i] === '+' && arrS2[i] === '-' || arrS1[i] === '-' && arrS2[i] === '+') {
            result.push('0')
        }

    }
    return result.join('')
}