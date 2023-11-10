function parseF(s) {
    if (typeof (s) === 'number') {
        return s
    }
    if (typeof (s) === 'string') {
        const a = parseFloat(s)
        if (!isNaN(a)) {
            return a
        }
    }
    return null
}