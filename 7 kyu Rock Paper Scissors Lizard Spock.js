function rpsls(pl1, pl2) {
    if (pl1 === pl2) return 'Draw!'
    let rules = {
        'paper': ['rock', 'spock'],
        'rock': ['lizard', 'scissors'],
        'lizard': ['spock', 'paper'],
        'spock': ['scissors', 'rock'],
        'scissors': ['lizard', 'paper']
    }
    if (rules[pl1].includes(pl2))
        return 'Player 1 Won!'
    else
        return 'Player 2 Won!'
}