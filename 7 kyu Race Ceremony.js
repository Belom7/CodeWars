function racePodium(blocks) {
    let first = Math.ceil(blocks/3)+1;
    let second = first - 1;
    let third = blocks-first-second;
    if (third === 0) {
        third = 1
        second -= 1
    }
    return [second,first,third]
}