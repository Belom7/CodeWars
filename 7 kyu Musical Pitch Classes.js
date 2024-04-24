function pitchClass(note) {
    if (!/^[A-G][#b]?$/.test(note)) return null

    var pitch = {C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11}
    var accidental = {'#': 1, 'b': -1}

    return (12 + pitch[note[0]] + (accidental[note[1]] || 0)) % 12
}