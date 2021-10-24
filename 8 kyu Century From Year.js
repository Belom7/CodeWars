function century(year) {

    b = year / 100

    if (Number.isInteger(b) == true) {
        return Math.floor(b)
    } else {
        return Math.floor(b + 1)
    }
    isInteger(b) ? Math.floor(b) : Math.floor(b + 1)
}