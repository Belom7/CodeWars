function getSize(width, height, depth){
    const square = 2 * width * height + 2 * height * depth + 2 * width * depth
    const volume = width * height * depth
    return [square,volume]
}