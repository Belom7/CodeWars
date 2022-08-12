function arrAdder(arr) {
    return arr[0].map((_, i) => arr.map(r => r[i]).join('')).join(' ')
}