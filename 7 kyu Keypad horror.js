function computerToPhone(numbers) {
    const ArrNumbersIn = numbers.split('')

    let add = ArrNumbersIn.map(numbers => numbers === '1' ? '7' :
                                          numbers === '2' ? '8' :
                                          numbers === '3' ? '9' :
                                          numbers === '4' ? '4' :
                                          numbers === '5' ? '5' :
                                          numbers === '6' ? '6' :
                                          numbers === '7' ? '1' :
                                          numbers === '8' ? '2' :
                                          numbers === '9' ? '3' : '0'
    )

    return add.join('')
}