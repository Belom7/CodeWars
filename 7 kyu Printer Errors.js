function printerError(s) {
    return `${s.split('').filter( e => /[n-z]/.test(e)).length}/${s.length}`
}