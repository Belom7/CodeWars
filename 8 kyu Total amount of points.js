function points(games) {
    let finalScore = 0

    games.map(m => m[0] < m[2]? finalScore += 0
        : m[0] > m[2]? finalScore += 3
            : finalScore += 1
    )

    return finalScore
}