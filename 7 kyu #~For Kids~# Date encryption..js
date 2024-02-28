function translateDate(s) {
    return s.replace(/\d\d/g, x => String.fromCharCode(+x + 50))
}