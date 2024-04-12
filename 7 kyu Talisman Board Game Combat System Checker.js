function getRequired(player, enemy) {
    const x = player[0]+player[1] - enemy[0]-enemy[1]
    if (x >= 6) return 'Auto-win'
    if (x <= -6) return 'Auto-lose'
    if (x === 0 ) return 'Random'
    if (x === -5) return 'Pray for a tie!'
    return x < 0 ? `(1..${5+x})` : `(${7-x}..6)`
}