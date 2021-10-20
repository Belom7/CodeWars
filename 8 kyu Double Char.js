function doubleChar(str) {

    let finishString = '';

    for (i = 0; i < str.length; i++) {
        finishString = finishString + str[i] + str[i]
    }
    return finishString
}