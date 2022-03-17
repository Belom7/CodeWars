function battle(x, y) {
    let one = x.split('').map(m => m.toUpperCase() === 'A' ? 1
        : m.toUpperCase() === 'B' ? 2
            : m.toUpperCase() === 'C' ? 3
                : m.toUpperCase() === 'D' ? 4
                    : m.toUpperCase() === 'E' ? 5
                        : m.toUpperCase() === 'F' ? 6
                            : m.toUpperCase() === 'G' ? 7
                                : m.toUpperCase() === 'H' ? 8
                                    : m.toUpperCase() === 'I' ? 9
                                        : m.toUpperCase() === 'J' ? 10
                                            : m.toUpperCase() === 'K' ? 11
                                                : m.toUpperCase() === 'L' ? 12
                                                    : m.toUpperCase() === 'M' ? 13
                                                        : m.toUpperCase() === 'N' ? 14
                                                            : m.toUpperCase() === 'O' ? 15
                                                                : m.toUpperCase() === 'P' ? 16
                                                                    : m.toUpperCase() === 'Q' ? 17
                                                                        : m.toUpperCase() === 'R' ? 18
                                                                            : m.toUpperCase() === 'S' ? 19
                                                                                : m.toUpperCase() === 'T' ? 20
                                                                                    : m.toUpperCase() === 'U' ? 21
                                                                                        : m.toUpperCase() === 'V' ? 22
                                                                                            : m.toUpperCase() === 'W' ? 23
                                                                                                : m.toUpperCase() === 'X' ? 24
                                                                                                    : m.toUpperCase() === 'Y' ? 25
                                                                                                        : m.toUpperCase() === 'Z' ? 26
                                                                                                            : undefined).reduce((total, amount) => total + amount)
    let two = y.split('').map(m => m.toUpperCase() === 'A' ? 1
        : m.toUpperCase() === 'B' ? 2
            : m.toUpperCase() === 'C' ? 3
                : m.toUpperCase() === 'D' ? 4
                    : m.toUpperCase() === 'E' ? 5
                        : m.toUpperCase() === 'F' ? 6
                            : m.toUpperCase() === 'G' ? 7
                                : m.toUpperCase() === 'H' ? 8
                                    : m.toUpperCase() === 'I' ? 9
                                        : m.toUpperCase() === 'J' ? 10
                                            : m.toUpperCase() === 'K' ? 11
                                                : m.toUpperCase() === 'L' ? 12
                                                    : m.toUpperCase() === 'M' ? 13
                                                        : m.toUpperCase() === 'N' ? 14
                                                            : m.toUpperCase() === 'O' ? 15
                                                                : m.toUpperCase() === 'P' ? 16
                                                                    : m.toUpperCase() === 'Q' ? 17
                                                                        : m.toUpperCase() === 'R' ? 18
                                                                            : m.toUpperCase() === 'S' ? 19
                                                                                : m.toUpperCase() === 'T' ? 20
                                                                                    : m.toUpperCase() === 'U' ? 21
                                                                                        : m.toUpperCase() === 'V' ? 22
                                                                                            : m.toUpperCase() === 'W' ? 23
                                                                                                : m.toUpperCase() === 'X' ? 24
                                                                                                    : m.toUpperCase() === 'Y' ? 25
                                                                                                        : m.toUpperCase() === 'Z' ? 26
                                                                                                            : undefined).reduce((total, amount) => total + amount)
    return one > two ? `${x}`
        : two > one ? `${y}`
            : "Tie!"
}