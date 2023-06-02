function eliminateUnsetBits(number) {
    return parseInt((number.split("0").join('')), 2) || 0;
}