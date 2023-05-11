function makeValley(arr) {
    let leftWing = []
    let rightWing = []
    arr.sort((a, b) => b - a)
        .forEach((el, i) => i % 2 === 0 ? leftWing.push(el) : rightWing.unshift(el))

    return [...leftWing, ...rightWing]
}