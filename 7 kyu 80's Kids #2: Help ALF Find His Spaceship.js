function findSpaceship(map) {
    let position = map && map
        .split('\n')
        .reverse()
        .map((row, idx) => ~row.indexOf('X') ? [row.indexOf('X'), idx] : false)
        .filter(x => x);
    return position && position[0] || 'Spaceship lost forever.';
}