const getPositions = s => {
    return [(s % 3), Math.floor(s/3) % 3, Math.floor(s/9) % 3];
}